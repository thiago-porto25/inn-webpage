export const dropDownHandler = (function () {
  const _dropDownButtons = document.querySelectorAll('.triggerDropDown')

  const _clickDropDownMenu = (button) => {
    const _dropDownContainer = button.querySelector('.dropDownContainer')
    _dropDownContainer.classList.toggle('dropDownDisplayed')
  }
  const _hoverDropDownMenu = (button) => {
    const _dropDownContainer = button.querySelector('.dropDownContainer')
    _dropDownContainer.setAttribute(
      'class',
      'dropDownContainer dropDownDisplayed'
    )
    _dropDownContainer.addEventListener('mouseout', () => {
      _dropDownContainer.setAttribute('class', 'dropDownContainer')
    })
    button.addEventListener('mouseout', () => {
      _dropDownContainer.setAttribute('class', 'dropDownContainer')
    })
  }

  _dropDownButtons.forEach((button) =>
    button.addEventListener('click', () => _clickDropDownMenu(button))
  )
  _dropDownButtons.forEach((button) =>
    button.addEventListener('mouseover', (e) => _hoverDropDownMenu(button))
  )
})()

/*

#navListItem {
  position: relative;
}
.triggerDropDown {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dropDownContainer {
  display: block;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 1rem;
  left: 0.00001rem;
  opacity: 0;
  transition: 200ms ease-in-out;
  pointer-events: none;
}
.dropDownItem {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropDownDisplayed {
  opacity: 1;
  pointer-events: visible;
}

*/
