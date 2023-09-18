# Checkbox and Radio
#### Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.

### Checkbox
```html
<label class="ev-checkbox-input">
    <input type="checkbox">
    <span class="ev-checkbox-input__check"></span>
    <span class="ev-checkbox-input__name pl1">checkbox default</span>
</label>

<label class="ev-checkbox-input--indeterminate">
    <input type="checkbox">
    <span class="ev-checkbox-input__check"></span>
    <span class="ev-checkbox-input__name pl1">indeterminate</span>
</label>

<label class="ev-checkbox-input--lighter">
    <input type="checkbox">
    <span class="ev-checkbox-input__check"></span>
    <span class="ev-checkbox-input__name pl1">checkbox light</span>
</label>

<label class="ev-checkbox-input--lighter-darkhover">
    <input type="checkbox">
    <span class="ev-checkbox-input__check"></span>
    <span class="ev-checkbox-input__name pl1">checkbox lighter</span>
</label>

<label class="ev-checkbox-input--rounded">
    <input type="checkbox">
    <span class="ev-checkbox-input__check"></span>
    <span class="ev-checkbox-input__name pl1">checkbox rounded</span>
</label>
```
### Radio
```html
<label class="ev-radio-input">
    <input type="radio" name="radio">
    <span class="ev-radio-input__check"></span>
    <span class="ev-radio-input__name pl1 pr1">radio</span>
</label>

<label class="ev-radio-input">
    <input type="radio" name="radio">
    <span class="ev-radio-input__check"></span>
    <span class="ev-radio-input__name pl1 pr1">radio</span>
</label>

<label class="ev-radio-input--lighter">
    <input type="radio" name="radio">
    <span class="ev-radio-input__check"></span>
    <span class="ev-radio-input__name pl1">radio light</span>
</label>
```
### Switch
```html
<div class="toggle-switch">
  <span class="label">Filtres</span>
    <div class="ev-switch">
        <input class="ev-switch__input"
            type="checkbox" id="switch"
            name="switch">
        <label class="ev-switch__content" for="switch"></label>
    </div>
</div>
```