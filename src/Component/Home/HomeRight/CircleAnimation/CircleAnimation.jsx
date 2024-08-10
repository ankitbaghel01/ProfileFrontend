import "./styles.css";
import React from "react";

export default function CircleAnimation() {
  const text = "Launch your Dream with us ";

  const Letter = text.split("");

  return (
    <div className="Circle-Animation">
         <img src="https://cdn3.emoji.gg/emojis/1372-checkmark.png" alt="Center Image" className="center-image" />
        <div className="Inside-Circle"></div>
      <section>
        {Letter.map((item, index) => {
          return (
            <span
              key={index}
              className="letter"
              style={{
                transform: `rotate(${index * (360 / Letter.length)}deg)`
              }}
            >
                {item}
            </span>
          );
        })}
      </section>
    </div>
  );
}
