import CachedImage from "@/app/projectList/cachedImage";

class ProjectInterface {
  id: number;
  title: string;
  coverImage: React.ReactElement | string | null;

  constructor(
    id: number,
    title: string,
    coverImage: React.ReactElement | string
  ) {
    this.id = id;
    this.title = title;
    this.coverImage = coverImage;
  }

  addCoverImage(cover_image: React.ReactElement) {
    this.coverImage = cover_image;
  }

  addCoverImageUrl(cover_image_url: string) {
    this.coverImage = cover_image_url;
    this.convertUriToImage();
  }

  convertUriToImage() {
    if (typeof this.coverImage === "string") {
      this.addCoverImage(
        <CachedImage
          streamingUrl={this.coverImage}
          cacheKey={this.id.toString()}
        />
      );
    }
  }
}
export default ProjectInterface;
