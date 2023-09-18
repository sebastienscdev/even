# dropdowns
## Single button dropdowns
#### Examples and usage guidelines for dropdown control styles, layout options, and custom components for creating a wide variety of dropdown.

```html
<div class="ev-dropdown">
    <button class="ev-btn btn-dropdown" id="EvDropdownMenuButton"              
        data-toggle="show" aria-haspopup="true" aria-expanded="false">
        <span class="ev-dropdown__title">Type d'opération</span>
        <span class="even-icon-caret-down"></span>
    </button>
</div>
```

## Single button dropdowns open

```html
<div class="ev-dropdown open">
    <button class="ev-btn btn-dropdown__open" id="EvDropdownMenuButton"              
        data-toggle="show" aria-haspopup="true" aria-expanded="false">
        <span class="ev-dropdown__title">Type d'opération</span>
        <span class="even-icon-caret-down"></span>
    </button>
</div>
<div class="ev-dropdown__menu">
  <div class="ev-dropdown__item">
    <ul class="ev-dropdown__list">
      <li> champs 1 <i class="even-icon-close-bold"></i> </li>
    </ul>
  </div>
</div>
```

## Single button dropdowns nature open

```html
<div class="ev-dropdown-filter open">
  <div class="ev-dropdown-filter__header">
    <span class="ev-dropdown__title">Type d'opération</span>
    <span class="header__icon even-icon-close-bold"></span>
  </div>
  <div class="ev-dropdown-filter__content no-select">
    <ul class="ev-dropdown-filter__items">
      <li class="ev-dropdown-filter__item">
        <label class="ev-radio-input">
          <input type="radio" name="radio">
          <span class="ev-radio-input__check"></span> 
          <span class="ev-radio-input__name pl1"> Toutes  
            <span class="ev-dropdown-filter__total"> (2584) </span> 
          </span>        
        </label>
      </li>
      <li class="ev-dropdown-filter__item">
        <label class="ev-radio-input">
          <input type="radio" name="radio">
          <span class="ev-radio-input__check"></span>
          <span class="ev-radio-input__name pl1"> TVA 
            <span class="ev-dropdown-filter__total"> (79) </span>
          </span>
        </label>
      </li>
      <li class="ev-dropdown-filter__item">
        <label class="ev-radio-input">
          <input type="radio" name="radio">
          <span class="ev-radio-input__check"></span>
          <span class="ev-radio-input__name pl1"> Chèque / Remise de chèques
            <span class="ev-dropdown-filter__total"> (269) </span>
          </span>
        </label>
      </li>
    </ul>
  </div>
</div>

```