import { A as R, U as i, S as w, b as U, f as o, G as N, c as A, m as I, C as g, g as p, l as v, d as E, a as S, F as M } from "./main-Zq7DLSnH.js";
import { A as x } from "./AbstractID3Parser-r3cs7xUO.js";
class l {
  static fromBase64(t) {
    return l.fromBuffer(Uint8Array.from(atob(t), (e) => e.charCodeAt(0)));
  }
  static fromBuffer(t) {
    return new l(t.length).get(t, 0);
  }
  constructor(t) {
    this.len = t;
  }
  get(t, e) {
    const r = R[i.get(t, e)];
    e += 4;
    const s = i.get(t, e);
    e += 4;
    const n = new w(s, "utf-8").get(t, e);
    e += s;
    const h = i.get(t, e);
    e += 4;
    const T = new w(h, "utf-8").get(t, e);
    e += h;
    const P = i.get(t, e);
    e += 4;
    const C = i.get(t, e);
    e += 4;
    const L = i.get(t, e);
    e += 4;
    const b = i.get(t, e);
    e += 4;
    const z = i.get(t, e);
    e += 4;
    const O = Uint8Array.from(t.slice(e, e + z));
    return {
      type: r,
      format: n,
      description: T,
      width: P,
      height: C,
      colour_depth: L,
      indexed_color: b,
      data: O
    };
  }
}
const d = {
  len: 7,
  get: (a, t) => ({
    packetType: U.get(a, t),
    vorbis: new w(6, "ascii").get(a, t + 1)
  })
}, _ = {
  len: 23,
  get: (a, t) => ({
    version: o.get(a, t + 0),
    channelMode: U.get(a, t + 4),
    sampleRate: o.get(a, t + 5),
    bitrateMax: o.get(a, t + 9),
    bitrateNominal: o.get(a, t + 13),
    bitrateMin: o.get(a, t + 17)
  })
};
class B {
  constructor(t, e) {
    this.data = t, this.offset = e;
  }
  readInt32() {
    const t = o.get(this.data, this.offset);
    return this.offset += 4, t;
  }
  readStringUtf8() {
    const t = this.readInt32(), e = N(this.data.subarray(this.offset, this.offset + t), "utf-8");
    return this.offset += t, e;
  }
  parseUserComment() {
    const t = this.offset, e = this.readStringUtf8(), r = e.indexOf("=");
    return {
      key: e.slice(0, r).toUpperCase(),
      value: e.slice(r + 1),
      len: this.offset - t
    };
  }
}
const m = A("music-metadata:parser:ogg:vorbis1");
class y extends I("Vorbis") {
}
class u {
  constructor(t, e) {
    this.pageSegments = [], this.durationOnLastPage = !0, this.metadata = t, this.options = e;
  }
  /**
   * Vorbis 1 parser
   * @param header Ogg Page Header
   * @param pageData Page data
   */
  async parsePage(t, e) {
    if (this.lastPageHeader = t, t.headerType.firstPage)
      this.parseFirstPage(t, e);
    else {
      if (t.headerType.continued) {
        if (this.pageSegments.length === 0)
          throw new y("Cannot continue on previous page");
        this.pageSegments.push(e);
      }
      if (t.headerType.lastPage || !t.headerType.continued) {
        if (this.pageSegments.length > 0) {
          const r = u.mergeUint8Arrays(this.pageSegments);
          await this.parseFullPage(r);
        }
        this.pageSegments = t.headerType.lastPage ? [] : [e];
      }
    }
  }
  static mergeUint8Arrays(t) {
    const e = t.reduce((s, n) => s + n.length, 0), r = new Uint8Array(e);
    return t.forEach((s, n, h) => {
      const T = h.slice(0, n).reduce((P, C) => P + C.length, 0);
      r.set(s, T);
    }), r;
  }
  async flush() {
    await this.parseFullPage(u.mergeUint8Arrays(this.pageSegments));
  }
  async parseUserComment(t, e) {
    const s = new B(t, e).parseUserComment();
    return await this.addTag(s.key, s.value), s.len;
  }
  async addTag(t, e) {
    if (t === "METADATA_BLOCK_PICTURE" && typeof e == "string") {
      if (this.options.skipCovers) {
        m("Ignore picture");
        return;
      }
      e = l.fromBase64(e), m(`Push picture: id=${t}, format=${e.format}`);
    } else
      m(`Push tag: id=${t}, value=${e}`);
    await this.metadata.addTag("vorbis", t, e);
  }
  calculateDuration() {
    this.lastPageHeader && this.metadata.format.sampleRate && this.lastPageHeader.absoluteGranulePosition >= 0 && (this.metadata.setFormat("numberOfSamples", this.lastPageHeader.absoluteGranulePosition), this.metadata.setFormat("duration", this.lastPageHeader.absoluteGranulePosition / this.metadata.format.sampleRate));
  }
  /**
   * Parse first Ogg/Vorbis page
   * @param _header
   * @param pageData
   */
  parseFirstPage(t, e) {
    this.metadata.setFormat("codec", "Vorbis I"), this.metadata.setFormat("hasAudio", !0), m("Parse first page");
    const r = d.get(e, 0);
    if (r.vorbis !== "vorbis")
      throw new y("Metadata does not look like Vorbis");
    if (r.packetType === 1) {
      const s = _.get(e, d.len);
      this.metadata.setFormat("sampleRate", s.sampleRate), this.metadata.setFormat("bitrate", s.bitrateNominal), this.metadata.setFormat("numberOfChannels", s.channelMode), m("sample-rate=%s[hz], bitrate=%s[b/s], channel-mode=%s", s.sampleRate, s.bitrateNominal, s.channelMode);
    } else
      throw new y("First Ogg page should be type 1: the identification header");
  }
  async parseFullPage(t) {
    const e = d.get(t, 0);
    switch (m("Parse full page: type=%s, byteLength=%s", e.packetType, t.byteLength), e.packetType) {
      case 3:
        return this.parseUserCommentList(t, d.len);
    }
  }
  /**
   * Ref: https://xiph.org/vorbis/doc/Vorbis_I_spec.html#x1-840005.2
   */
  async parseUserCommentList(t, e) {
    const r = o.get(t, e);
    e += 4, e += r;
    let s = o.get(t, e);
    for (e += 4; s-- > 0; )
      e += await this.parseUserComment(t, e);
  }
}
const c = {
  STREAMINFO: 0,
  // STREAMINFO
  PADDING: 1,
  // PADDING
  APPLICATION: 2,
  // APPLICATION
  SEEKTABLE: 3,
  // SEEKTABLE
  VORBIS_COMMENT: 4,
  // VORBIS_COMMENT
  CUESHEET: 5,
  // CUESHEET
  PICTURE: 6
  // PICTURE
}, $ = {
  len: 4,
  get: (a, t) => ({
    lastBlock: v(a, t, 7),
    type: p(a, t, 1, 7),
    length: g.get(a, t + 1)
  })
}, k = {
  len: 34,
  get: (a, t) => ({
    // The minimum block size (in samples) used in the stream.
    minimumBlockSize: S.get(a, t),
    // The maximum block size (in samples) used in the stream.
    // (Minimum blocksize == maximum blocksize) implies a fixed-blocksize stream.
    maximumBlockSize: S.get(a, t + 2) / 1e3,
    // The minimum frame size (in bytes) used in the stream.
    // May be 0 to imply the value is not known.
    minimumFrameSize: g.get(a, t + 4),
    // The maximum frame size (in bytes) used in the stream.
    // May be 0 to imply the value is not known.
    maximumFrameSize: g.get(a, t + 7),
    // Sample rate in Hz. Though 20 bits are available,
    // the maximum sample rate is limited by the structure of frame headers to 655350Hz.
    // Also, a value of 0 is invalid.
    sampleRate: g.get(a, t + 10) >> 4,
    // probably slower: sampleRate: common.getBitAllignedNumber(buf, off + 10, 0, 20),
    // (number of channels)-1. FLAC supports from 1 to 8 channels
    channels: p(a, t + 12, 4, 3) + 1,
    // bits per sample)-1.
    // FLAC supports from 4 to 32 bits per sample. Currently the reference encoder and decoders only support up to 24 bits per sample.
    bitsPerSample: p(a, t + 12, 7, 5) + 1,
    // Total samples in stream.
    // 'Samples' means inter-channel sample, i.e. one second of 44.1Khz audio will have 44100 samples regardless of the number of channels.
    // A value of zero here means the number of total samples is unknown.
    totalSamples: p(a, t + 13, 4, 36),
    // the MD5 hash of the file (see notes for usage... it's a littly tricky)
    fileMD5: new E(16).get(a, t + 18)
  })
}, D = A("music-metadata:parser:FLAC");
class F extends I("FLAC") {
}
class H extends x {
  constructor() {
    super(...arguments), this.vorbisParser = new u(this.metadata, this.options), this.padding = 0;
  }
  async postId3v2Parse() {
    if ((await this.tokenizer.readToken(M)).toString() !== "fLaC")
      throw new F("Invalid FLAC preamble");
    let e;
    do
      e = await this.tokenizer.readToken($), await this.parseDataBlock(e);
    while (!e.lastBlock);
    if (this.tokenizer.fileInfo.size && this.metadata.format.duration) {
      const r = this.tokenizer.fileInfo.size - this.tokenizer.position;
      this.metadata.setFormat("bitrate", 8 * r / this.metadata.format.duration);
    }
  }
  async parseDataBlock(t) {
    switch (D(`blockHeader type=${t.type}, length=${t.length}`), t.type) {
      case c.STREAMINFO:
        return this.readBlockStreamInfo(t.length);
      case c.PADDING:
        this.padding += t.length;
        break;
      case c.APPLICATION:
        break;
      case c.SEEKTABLE:
        break;
      case c.VORBIS_COMMENT:
        return this.readComment(t.length);
      case c.CUESHEET:
        break;
      case c.PICTURE:
        await this.parsePicture(t.length);
        return;
      default:
        this.metadata.addWarning(`Unknown block type: ${t.type}`);
    }
    return this.tokenizer.ignore(t.length).then();
  }
  /**
   * Parse STREAMINFO
   */
  async readBlockStreamInfo(t) {
    if (t !== k.len)
      throw new F("Unexpected block-stream-info length");
    const e = await this.tokenizer.readToken(k);
    this.metadata.setFormat("container", "FLAC"), this.processsStreamInfo(e);
  }
  /**
   * Parse STREAMINFO
   */
  processsStreamInfo(t) {
    this.metadata.setFormat("codec", "FLAC"), this.metadata.setFormat("hasAudio", !0), this.metadata.setFormat("lossless", !0), this.metadata.setFormat("numberOfChannels", t.channels), this.metadata.setFormat("bitsPerSample", t.bitsPerSample), this.metadata.setFormat("sampleRate", t.sampleRate), t.totalSamples > 0 && this.metadata.setFormat("duration", t.totalSamples / t.sampleRate);
  }
  /**
   * Read VORBIS_COMMENT from tokenizer
   * Ref: https://www.xiph.org/vorbis/doc/Vorbis_I_spec.html#x1-640004.2.3
   */
  async readComment(t) {
    const e = await this.tokenizer.readToken(new E(t));
    return this.parseComment(e);
  }
  /**
   * Parse VORBIS_COMMENT
   * Ref: https://www.xiph.org/vorbis/doc/Vorbis_I_spec.html#x1-640004.2.3
   */
  async parseComment(t) {
    const e = new B(t, 0);
    e.readStringUtf8();
    const r = e.readInt32(), s = new Array(r);
    for (let n = 0; n < r; n++)
      s[n] = e.parseUserComment();
    await Promise.all(s.map((n) => this.addTag(n.key, n.value)));
  }
  async parsePicture(t) {
    return this.options.skipCovers ? this.tokenizer.ignore(t) : this.addPictureTag(await this.tokenizer.readToken(new l(t)));
  }
  addPictureTag(t) {
    return this.addTag("METADATA_BLOCK_PICTURE", t);
  }
  addTag(t, e) {
    return this.vorbisParser.addTag(t, e);
  }
}
const K = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FlacParser: H
}, Symbol.toStringTag, { value: "Module" }));
export {
  $ as B,
  H as F,
  u as V,
  c as a,
  l as b,
  k as c,
  K as d
};
