import { b as g, k as C, f as d, S as h, m as y, q as i, K as _, c as p, C as I, a as k, l as u, j as N, F as b, B as E, E as z, d as x } from "./main-Zq7DLSnH.js";
import "node:fs/promises";
import { V as w, F as H, B as T, a as c, b as L, c as B } from "./FlacParser-CwZ2Vxh0.js";
class v extends y("Opus") {
}
class A {
  constructor(e) {
    if (e < 19)
      throw new v("ID-header-page 0 should be at least 19 bytes long");
    this.len = e;
  }
  get(e, t) {
    return {
      magicSignature: new h(8, "ascii").get(e, t + 0),
      version: g.get(e, t + 8),
      channelCount: g.get(e, t + 9),
      preSkip: C.get(e, t + 10),
      inputSampleRate: d.get(e, t + 12),
      outputGain: C.get(e, t + 16),
      channelMapping: g.get(e, t + 18)
    };
  }
}
class U extends w {
  constructor(e, t, s) {
    super(e, t), this.idHeader = null, this.lastPos = -1, this.tokenizer = s, this.durationOnLastPage = !0;
  }
  /**
   * Parse first Opus Ogg page
   * @param {IPageHeader} header
   * @param {Uint8Array} pageData
   */
  parseFirstPage(e, t) {
    if (this.metadata.setFormat("codec", "Opus"), this.idHeader = new A(t.length).get(t, 0), this.idHeader.magicSignature !== "OpusHead")
      throw new v("Illegal ogg/Opus magic-signature");
    this.metadata.setFormat("sampleRate", this.idHeader.inputSampleRate), this.metadata.setFormat("numberOfChannels", this.idHeader.channelCount), this.metadata.setAudioOnly();
  }
  async parseFullPage(e) {
    switch (new h(8, "ascii").get(e, 0)) {
      case "OpusTags":
        await this.parseUserCommentList(e, 8), this.lastPos = this.tokenizer.position - e.length;
        break;
    }
  }
  calculateDuration() {
    if (this.lastPageHeader && this.metadata.format.sampleRate && this.lastPageHeader.absoluteGranulePosition >= 0) {
      const e = this.lastPageHeader.absoluteGranulePosition - this.idHeader.preSkip;
      if (this.metadata.setFormat("numberOfSamples", e), this.metadata.setFormat("duration", e / 48e3), this.lastPos !== -1 && this.tokenizer.fileInfo.size && this.metadata.format.duration) {
        const t = this.tokenizer.fileInfo.size - this.lastPos;
        this.metadata.setFormat("bitrate", 8 * t / this.metadata.format.duration);
      }
    }
  }
}
const $ = {
  len: 80,
  get: (a, e) => ({
    speex: new h(8, "ascii").get(a, e + 0),
    version: _(new h(20, "ascii").get(a, e + 8)),
    version_id: i.get(a, e + 28),
    header_size: i.get(a, e + 32),
    rate: i.get(a, e + 36),
    mode: i.get(a, e + 40),
    mode_bitstream_version: i.get(a, e + 44),
    nb_channels: i.get(a, e + 48),
    bitrate: i.get(a, e + 52),
    frame_size: i.get(a, e + 56),
    vbr: i.get(a, e + 60),
    frames_per_packet: i.get(a, e + 64),
    extra_headers: i.get(a, e + 68),
    reserved1: i.get(a, e + 72),
    reserved2: i.get(a, e + 76)
  })
}, R = p("music-metadata:parser:ogg:speex");
class V extends w {
  constructor(e, t, s) {
    super(e, t);
  }
  /**
   * Parse first Speex Ogg page
   * @param {IPageHeader} header
   * @param {Uint8Array} pageData
   */
  parseFirstPage(e, t) {
    R("First Ogg/Speex page");
    const s = $.get(t, 0);
    this.metadata.setFormat("codec", `Speex ${s.version}`), this.metadata.setFormat("numberOfChannels", s.nb_channels), this.metadata.setFormat("sampleRate", s.rate), s.bitrate !== -1 && this.metadata.setFormat("bitrate", s.bitrate), this.metadata.setAudioOnly();
  }
}
const M = {
  len: 42,
  get: (a, e) => ({
    id: new h(7, "ascii").get(a, e),
    vmaj: g.get(a, e + 7),
    vmin: g.get(a, e + 8),
    vrev: g.get(a, e + 9),
    vmbw: k.get(a, e + 10),
    vmbh: k.get(a, e + 17),
    nombr: I.get(a, e + 37),
    nqual: g.get(a, e + 40)
  })
}, F = p("music-metadata:parser:ogg:theora");
class q {
  constructor(e, t, s) {
    this.durationOnLastPage = !1, this.metadata = e;
  }
  /**
   * Vorbis 1 parser
   * @param header Ogg Page Header
   * @param pageData Page data
   */
  async parsePage(e, t) {
    e.headerType.firstPage && await this.parseFirstPage(e, t);
  }
  calculateDuration() {
    F("duration calculation not implemented");
  }
  /**
   * Parse first Theora Ogg page. the initial identification header packet
   */
  async parseFirstPage(e, t) {
    F("First Ogg/Theora page"), this.metadata.setFormat("codec", "Theora");
    const s = M.get(t, 0);
    this.metadata.setFormat("bitrate", s.nombr), this.metadata.setFormat("hasVideo", !0);
  }
  flush() {
    return Promise.resolve();
  }
}
const D = {
  len: 27,
  get: (a, e) => ({
    capturePattern: new h(4, "latin1").get(a, e),
    version: g.get(a, e + 4),
    headerType: {
      continued: u(a, e + 5, 0),
      firstPage: u(a, e + 5, 1),
      lastPage: u(a, e + 5, 2)
    },
    // packet_flag: Token.UINT8.get(buf, off + 5),
    absoluteGranulePosition: Number(N.get(a, e + 6)),
    streamSerialNumber: d.get(a, e + 14),
    pageSequenceNo: d.get(a, e + 18),
    pageChecksum: d.get(a, e + 22),
    page_segments: g.get(a, e + 26)
  })
};
class O {
  static sum(e, t, s) {
    const r = new DataView(e.buffer, 0);
    let m = 0;
    for (let o = t; o < t + s; ++o)
      m += r.getUint8(o);
    return m;
  }
  constructor(e) {
    this.len = e.page_segments;
  }
  get(e, t) {
    return {
      totalPageSize: O.sum(e, t, this.len)
    };
  }
}
const P = p("music-metadata:parser:ogg:theora");
class G {
  constructor(e, t, s) {
    this.durationOnLastPage = !1, this.metadata = e, this.options = t, this.tokenizer = s, this.flacParser = new H(this.metadata, this.tokenizer, t);
  }
  /**
   * Vorbis 1 parser
   * @param header Ogg Page Header
   * @param pageData Page data
   */
  async parsePage(e, t) {
    e.headerType.firstPage && await this.parseFirstPage(e, t);
  }
  calculateDuration() {
    P("duration calculation not implemented");
  }
  /**
   * Parse first Theora Ogg page. the initial identification header packet
   */
  async parseFirstPage(e, t) {
    if (P("First Ogg/FLAC page"), (await b.get(t, 9)).toString() !== "fLaC")
      throw new Error("Invalid FLAC preamble");
    const r = await T.get(t, 13);
    await this.parseDataBlock(r, t.subarray(13 + T.len));
  }
  async parseDataBlock(e, t) {
    switch (P(`blockHeader type=${e.type}, length=${e.length}`), e.type) {
      case c.STREAMINFO: {
        const s = B.get(t, 0);
        return this.flacParser.processsStreamInfo(s);
      }
      case c.PADDING:
        break;
      case c.APPLICATION:
        break;
      case c.SEEKTABLE:
        break;
      case c.VORBIS_COMMENT:
        return this.flacParser.parseComment(t);
      case c.PICTURE:
        if (!this.options.skipCovers) {
          const s = new L(t.length).get(t, 0);
          return this.flacParser.addPictureTag(s);
        }
        break;
      default:
        this.metadata.addWarning(`Unknown block type: ${e.type}`);
    }
    return this.tokenizer.ignore(e.length).then();
  }
  flush() {
    return Promise.resolve();
  }
}
class S extends y("Ogg") {
}
const n = p("music-metadata:parser:ogg");
class j {
  constructor(e, t, s) {
    this.pageNumber = 0, this.closed = !1, this.metadata = e, this.streamSerial = t, this.options = s;
  }
  async parsePage(e, t) {
    this.pageNumber = t.pageSequenceNo, n("serial=%s page#=%s, Ogg.id=%s", t.streamSerialNumber, t.pageSequenceNo, t.capturePattern);
    const s = await e.readToken(new O(t));
    n("totalPageSize=%s", s.totalPageSize);
    const r = await e.readToken(new x(s.totalPageSize));
    if (n("firstPage=%s, lastPage=%s, continued=%s", t.headerType.firstPage, t.headerType.lastPage, t.headerType.continued), t.headerType.firstPage) {
      this.metadata.setFormat("container", "Ogg");
      const m = r.slice(0, 7), o = Array.from(m).filter((l) => l >= 32 && l <= 126).map((l) => String.fromCharCode(l)).join("");
      switch (o) {
        case "vorbis":
          n(`Set Ogg stream serial ${t.streamSerialNumber}, codec=Vorbis`), this.pageConsumer = new w(this.metadata, this.options);
          break;
        case "OpusHea":
          n("Set page consumer to Ogg/Opus"), this.pageConsumer = new U(this.metadata, this.options, e);
          break;
        case "Speex  ":
          n("Set page consumer to Ogg/Speex"), this.pageConsumer = new V(this.metadata, this.options, e);
          break;
        case "fishead":
        case "theora":
          n("Set page consumer to Ogg/Theora"), this.pageConsumer = new q(this.metadata, this.options, e);
          break;
        case "FLAC":
          n("Set page consumer to Vorbis"), this.pageConsumer = new G(this.metadata, this.options, e);
          break;
        default:
          throw new S(`Ogg codec not recognized (id=${o}`);
      }
    }
    if (t.headerType.lastPage && (this.closed = !0), this.pageConsumer)
      await this.pageConsumer.parsePage(t, r);
    else
      throw new Error("pageConsumer should be initialized");
  }
}
class Q extends E {
  constructor() {
    super(...arguments), this.streams = /* @__PURE__ */ new Map();
  }
  /**
   * Parse page
   * @returns {Promise<void>}
   */
  async parse() {
    var t, s;
    this.streams = /* @__PURE__ */ new Map();
    let e;
    try {
      do {
        if (e = await this.tokenizer.readToken(D), e.capturePattern !== "OggS")
          throw new S("Invalid Ogg capture pattern");
        let r = this.streams.get(e.streamSerialNumber);
        if (r || (r = new j(this.metadata, e.streamSerialNumber, this.options), this.streams.set(e.streamSerialNumber, r)), await r.parsePage(this.tokenizer, e), r.pageNumber > 12 && !(this.options.duration && [...this.streams.values()].find((m) => {
          var o;
          return (o = m.pageConsumer) == null ? void 0 : o.durationOnLastPage;
        }))) {
          n("Stop processing Ogg stream");
          break;
        }
      } while (![...this.streams.values()].every((r) => r.closed));
    } catch (r) {
      if (r instanceof z)
        n("Reached end-of-stream");
      else if (r instanceof S)
        this.metadata.addWarning(`Corrupt Ogg content at ${this.tokenizer.position}`);
      else
        throw r;
    }
    for (const r of this.streams.values())
      r.closed || (this.metadata.addWarning(`End-of-stream reached before reaching last page in Ogg stream serial=${r.streamSerial}`), await ((t = r.pageConsumer) == null ? void 0 : t.flush())), (s = r.pageConsumer) == null || s.calculateDuration();
  }
}
export {
  S as OggContentError,
  Q as OggParser
};
