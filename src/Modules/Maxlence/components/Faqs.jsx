import Faq from "react-faq-component";
import { IoIosArrowDown } from "react-icons/io";

const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: <IoIosArrowDown />,
  collapseIcon: <IoIosArrowDown />,
};

const data = {
  title: "FAQ",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur ",
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content:
        "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
    },
    {
      title: "What is the package version",
      content: "v1.0.5",
    },
  ],
  styles: {
    bgColor: "white",
    titleTextColor: "black",
    // titleTextSize: '48px',
    rowTitleColor: "black",
    rowTitleFontWeight: "700",
    rowTitleTextSize: "1rem",
    rowContentColor: "grey",
    rowContentTextSize: "1rem",
    // rowContentPaddingTop: '10px',
    rowContentPaddingBottom: "10px",
    // rowContentPaddingLeft: "50px",
    // rowContentPaddingRight: '150px',
    // arrowColor: "red",
    //transitionDuration: "1s",
    // timingFunc: "ease"
  },
};

export const Faqs = () => {
  return (
    <div className="faqContainer">
      <section className="title-centerc container border-0">
        <Faq data={data} config={config} styles={data.styles} />
      </section>
    </div>
  );
};
