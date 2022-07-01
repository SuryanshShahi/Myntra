import React from "react";
import { Carousel } from "react-bootstrap";
import {
  Banner,
  Deals,
  Brands,
  Brands1,
  TopPicks,
  categories,
  categories1,
  categories2,
  TopBrands,
  TopBrands1,
  TopBrands2,
  SlashedPrice,
  SlashedPrice1,
  BestBuys,
  BestBuys1,
  MyntraLuxe,
  MyntraLuxe1,
  GiftCards,
  FirstOnMyntra,
  FirstOnMyntra1,
  HottestFinds,
  Trending,
  Kidswear,
  NewBrands,
  SpringSeason,
  occasion,
  occasion1,
  Grooming,
  Grooming1,
  Unmissable,
  Colours,
  Colours1,
  Influencers,
  BudgetPicks,
  TrendingOutfits,
} from "../Data/Data";
// import Carousel from "react-material-ui-carousel";
import Donate from "./Donation.webp";
import Spotlight from "./spotlight.gif";

function Home() {

  return (
    <div style={{ marginTop: "130px" }}>
      <div className="my-5">
        <Carousel>
          {Banner.map((e) => (
            <Carousel.Item interval="3000" key={e.id}>
              <img src={e.image} className="img-fluid d-block w-100"></img>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="my-5">
        <img src={Donate} className="img-fluid" alt="donation" />
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 mb-5">DEAL OF THE DAY</h2>
        <div className="row mx-0">
          {Deals.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <img src={Spotlight} className="img-fluid" alt="spotlight" />
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">BEST OF MYNTRA EXCLUSIVE BRANDS</h2>
        <div className="row mx-0">
          {Brands.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {Brands1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">TOP PICKS</h2>
        <div className="row mx-0">
          {TopPicks.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">CATEGORIES TO BAG</h2>
        <div className="row mx-0">
          {categories.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {categories1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {categories2.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">DEALS ON TOP BRANDS</h2>
        <div className="row mx-0">
          {TopBrands.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {TopBrands1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {TopBrands2.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">BRANDS AT SLASHED PRICES</h2>
        <div className="row mx-0">
          {SlashedPrice.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {SlashedPrice1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">BEST BUYS</h2>
        <div className="row mx-0">
          {BestBuys.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {BestBuys1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">MYNTRA LUXE</h2>
        <div className="row mx-0">
          {MyntraLuxe.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {MyntraLuxe1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">MYNTRA LUXE</h2>
        <div className="row mx-0">
          {GiftCards.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">MYNTRA LUXE</h2>
        <div className="row mx-0">
          {FirstOnMyntra.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {FirstOnMyntra1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">STYLECAST HOTTEST FINDS</h2>
        <div className="row mx-0">
          {HottestFinds.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">TRENDS FOR HIM</h2>
        <div className="row mx-0">
          {Trending.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">BEST OF KIDSWEAR</h2>
        <div className="row mx-0">
          {Kidswear.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">NEW IN TOP BRANDS</h2>
        <div className="row mx-0">
          {NewBrands.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">NEW IN TOP BRANDS</h2>
        <div className="row mx-0">
          {SpringSeason.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">NEW IN TOP BRANDS</h2>
        <div className="row mx-0">
          {occasion.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {occasion1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">LATEST IN BEAUTY & GROOMING</h2>
        <div className="row mx-0">
          {Grooming.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {Grooming1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">UNMISSABLE THIS SEASON</h2>
        <div className="row mx-0">
          {Unmissable.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">COLOURS OF THE SEASON</h2>
        <div className="row mx-0">
          {Colours.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {Colours1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">TOP INFLUENCERS EXCLUSIVE STYLES</h2>
        <div className="row mx-0">
          {Influencers.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">BUDGET PICKS INFLUENCERS LOVE</h2>
        <div className="row mx-0">
          {BudgetPicks.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">TRENDING OUTFITS BY INFLUENCERS</h2>
        <div className="row mx-0">
          {TrendingOutfits.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img src={image} className="img-fluid" alt="Deals of the day" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
