import { StickerCategory } from "components/StickerCategory"


export const Kisscut = "/resources/images/sticker-images/KISSCUT.webp"
export const Circle = "/resources/images/sticker-images/CIRCLE.webp"
export const Rectangle = "/resources/images/sticker-images/RECTANGLE.webp"
export const Square = "/resources/images/sticker-images/SQUARE.webp"
export const Diecut = "/resources/images/sticker-images/DIECUT.webp"
export const Oval = "/resources/images/sticker-images/OVAL.webp"
export const Bumper = "/resources/images/sticker-images/BUMPER.webp"
export const Rounded = "/resources/images/sticker-images/ROUNDED.webp"

export const MainOptions = ({ handleOrder, handleNext }) => (
  <div className="main-options flex flex-column">
    <div className="withStrike"></div>
    <p>
      Our
      <br />
      Sticker Categories
      <span>Select your sticker type to get started!</span>
    </p>
    <div className="main-options-items flex">
      <StickerCategory
        image={Diecut}
        title={"Die Cut Stickers"}
        comment={
          "Click above to start your order. Both backing and sticker cut to shape."
        }
        onClick={() => handleOrder("Die cut stickers")}
      />
      <StickerCategory
        image={Kisscut}
        title={"Kiss cut stickers"}
        comment={
          "Click above to start your order. Cut to shape with a square backing."
        }
        onClick={() => handleOrder("Kiss cut stickers")}
      />
      <StickerCategory
        className="homepage-option"
        image={Circle}
        title={"Circle stickers"}
        comment={
          "Click above to start your order. Stickers in the shape of a circle."
        }
        onClick={() => handleOrder("Circle stickers")}
      />
      <StickerCategory
        className="homepage-option"
        image={Rectangle}
        title={"Rectangle stickers"}
        comment={"Click above to start your order. Cut into a rectangle shape."}
        onClick={() => handleOrder("Rectangle stickers")}
      />
      <StickerCategory
        className="homepage-option"
        image={Square}
        title={"Square stickers"}
        comment={
          "Click above to start your order. Stickers in the shape of a square."
        }
        onClick={() => handleOrder("Square stickers")}
      />
      <StickerCategory
        className="homepage-option"
        image={Oval}
        title={"Oval stickers"}
        comment={
          "Click above to start your order. Stickers in the shape of an oval."
        }
        onClick={() => handleOrder("Oval stickers")}
      />
      <StickerCategory
        className="homepage-option"
        image={Rounded}
        title={"Rounded stickers"}
        comment={
          "Click above to start your order. Stickers with rounded corners."
        }
        onClick={() => handleOrder("Rounded stickers")}
      />
      <StickerCategory
        className="homepage-option"
        image={Bumper}
        title={"Bumper stickers"}
        comment={
          "Click above to start your order. Stickers designed for your vehicle."
        }
        onClick={() => handleOrder("Bumper stickers")}
      />
    </div>
    <div className="main-options-more">
      <div className="main-options-more-button" onClick={() => handleNext()}>
        VIEW MORE
      </div>
    </div>   
  </div>
)

 MainOptions
