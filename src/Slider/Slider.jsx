import React from 'react';
import './Slider.css';

class Slider extends React.Component {
  render() {
    return <div className="slider__wrapper">
      <img></img>
      <img></img>
      <img></img>
      <ul className="slider_control">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  }
}

window.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector(".slider__wrapper");
    slider.addEventListener("click", function(event) {
        var target = event.target;
        if (target = target.closest(".pic")) {
            event.preventDefault();
            var a = slider.querySelectorAll(".pic");
            var img = slider.querySelectorAll("img");
            var selected = [].indexOf.call(a, target);
            [].forEach.call(a, function(el, i) {
                 (i == selected) ? (el.classList.add("active"), img[i].classList.add("active")):
                  (el.classList.remove("active"), img[i].classList.remove("active"))
            })
        }
    })
});

export default Slider;
