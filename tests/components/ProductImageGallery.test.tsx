import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render nothing if given an empty array", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render a list of images", () => {
    const imageURLs = ["url1", "url2"];

    render(<ProductImageGallery imageUrls={imageURLs} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);

    imageURLs.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
