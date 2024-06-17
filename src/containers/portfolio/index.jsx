import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.webp";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.avif";
import ImageFive from "../../images/cure.png";
import Imagesix from "../../images/research.png";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: "https://www.google.co.in/",
  },
  {
    id: 3,
    name: "ClassyCalculator",
    link: "https://bhargavuchiha.github.io/Classycalculator/",
    image: ImageThree,
  },
  {
    id: 2,
    name: "Jarvis",
    image: ImageTwo,
    link: "https://github.com/Bhargavuchiha/Jarvis",
  },
  {
    id: 2,
    name: "CureComm",
    image: ImageFive,
    link: "https://drive.google.com/file/d/1K2o8_etl22Q8El2FZMn-EoBL3CBHhYlx/view?pli=1",
  },
  {
    id: 3,
    name: "Payment App UI",
    image: ImageFour,
    link: "https://www.figma.com/design/izbtMRFQl3H1TRc7SYyuQv/Paytm's-Father-(Copy)?node-id=0-1&t=2rnJtkGgWGzip9RM-1",
  },
  {
    id: 3,
    name: "Research Journal",
    image: Imagesix,
    link: "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=IMZUh8gAAAAJ",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__content__cards__item__link"
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <img alt={item.name} src={item.image} />
                </div>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <button>Visit</button>
                    </div>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
