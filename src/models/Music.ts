import Album from "./Album";
import Artist from "./Artist";

interface Music {
  album: Album;
  artist: Artist;
  duration: number;
  explicit_content_cover: number;
  explicit_content_lyrics: number;
  explicit_lyrics: boolean;
  id: number;
  link: string;
  md5_image: string;
  preview: string;
  rank: number;
  title: string;
  title_short: string;
  title_version: string;
  type: string;
  ytLink?: string;
}

export default Music;
