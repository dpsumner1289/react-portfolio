// import dependencies
import React, { useState } from "react";

// import components
import PageHeading from "./PageHeading";

export const Slide = props => {
  let tileMarkup;
  let testimonials;
  if (props.tiles) {
    tileMarkup = (
      <aside className="flex row work">
        {props.tiles.map(tile => {
          return (
            <aside className="flex col item_1_2 work-tile">
              <h3>{tile.title}</h3>
              <p>{tile.description}</p>
              <figure>
                <img src={tile.image} />
              </figure>
            </aside>
          );
        })}
      </aside>
    );
  }
  if (props.testimonials) {
    testimonials = (
      <section className="testimonials">
        {props.testimonials.map(testimonial => testimonial)}
      </section>
    );
  }
  return (
    <section className="slide flex col container afs jfs">
      <header className="title">
        <PageHeading title={props.title} />
        <article className="flex col">{props.content}</article>
      </header>
      {tileMarkup}
      {testimonials}
    </section>
  );
};
