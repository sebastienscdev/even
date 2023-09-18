# Inputs
### Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of Inputs.

## User 

```html
<div class="ev-input-group">
    <label class="ev-label" for="basic-id">Identifiant</label>
    <div class="ev-input ev-input__identify">
        <input type="email" class="ev-input__text" placeholder="abc@gmail.com" id="basic-id">
        <i class="even-icon-profil"></i>
    </div>
</div>
```

## Login 

```html
<div class="ev-input-group">
    <label class="ev-label" for="pass">Mot de passe</label>
    <div class="ev-input ev-input__password">
        <input type="password" class="ev-input__text" placeholder="votre mot de passe" id="pass">
        <i class="even-icon-key"></i>
        <i class="even-icon-eye unmask"></i>
    </div>
</div>
```

## Date 

```html
<div class="ev-input-group" width="10rem">
    <div class="ev-input ev-input__picker mb1">
        <input type="text" class="ev-input__date" placeholder="Du" id="start">
        <i class="even-icon-date"></i>
    </div>
    <div class="ev-input ev-input__picker mb1">
        <input type="text" class="ev-input__date" placeholder="Au" id="end">
        <i class="even-icon-date"></i>
    </div>
</div>
```

## Number 

```html
<div class="ev-input-group" width="10rem">
    <div class="ev-input mb1">
        <input type="number" name="Number" placeholder="Min €" class="ev-input__number mr2">
    </div>
    <div class="ev-input mb1">
        <input type="number" name="Number" placeholder="Max €" class="ev-input__number">
    </div>
    <div class="ev-input mb1">
        <input type="number" name="Number" width="10rem" placeholder="Montant exact €" class="ev-input__number large">
    </div>
</div>
```

## List

```html
<div class="ev-input ev-input__list mb2">
    <i class="even-icon-caret-down"></i>
    <select class="ev-input__select" id="select-change-select" name="tva">
        <option class="option-tva-select" value="0"> Exo </option>
        <option class="option-tva-select" value="0.021"> 2.10 % </option>
        <option class="option-tva-select" value="0.055"> 5.50 % </option>
        <option class="option-tva-select" value="0.085"> 8.50 % </option>
        <option class="option-tva-select" value="0.1"> 10.00 % </option>
        <option class="option-tva-select" value="0.13"> 13.00 % </option>
        <option class="option-tva-select" value="0.2"> 20.00 % </option>
    </select>
</div>
<div class="ev-input ev-input__list">
    <i class="even-icon-caret-down"></i>
    <select class="ev-input__select white" readonly id="select-change-select" name="tva">
        <option class="option-tva-select" value="0"> Exo </option>
        <option class="option-tva-select" value="0.021"> 2.10 % </option>
        <option class="option-tva-select" value="0.055"> 5.50 % </option>
        <option class="option-tva-select" value="0.085"> 8.50 % </option>
        <option class="option-tva-select" value="0.1"> 10.00 % </option>
        <option class="option-tva-select" value="0.13"> 13.00 % </option>
        <option class="option-tva-select" value="0.2"> 20.00 % </option>
    </select>
</div>
```
## Text

```html
<div class="ev-input-group">
    <div class="ev-input" style="width:15rem">
        <input placeholder="Juin" id="" type="text" class="ev-input__libelle">
    </div>
</div>
<hr>
<div class="ev-input-group">
    <div class="ev-input" style="width:20rem">
        <label class="ev-label__right" for="pass">Libellé</label>
        <input placeholder="Saisissez un libellé explicite" type="text" class="ev-input-fill__main-color">
    </div>
</div>
<hr>
<div class="ev-input-group">
    <div class="ev-input" style="width:20rem">
        <label class="ev-label__right" for="pass">Montant TTC</label>
        <input placeholder="1200,00 €" type="text" class="ev-input-fill__main-color">
    </div>
</div>
```

## Search

```html
<div class="ev-input-group">
    <div class="ev-input-search">
        <span class="text-before"> Affecter </span>
        <input placeholder="Rechercher une ou plusieurs opérations (par période, par montant, etc.)" id="" type="text" class="fill">
        <span class="even-icon-loupe"></span>
    </div>
</div>
<hr>
<div class="ev-input-search">
    <input placeholder="Rechercher une ou plusieurs opérations (par période, par montant, etc.)" id="" type="text" class="outline">
    <span class="even-icon-loupe"></span>
</div>
<hr>
<div class="ev-input-search">
    <input placeholder="Rechercher une ou plusieurs opérations (par période, par montant, etc.)" id="" type="text" class="fill">
    <span class="even-icon-loupe"></span>
</div>
```

## Comment

```html
<div class="ev-input-group">
    <div class="ev-input-comment">
        <div class="icon-comment">
            <span class="even-icon-comment pr1"></span>
            <span class="ev-badge__comment">10</span>
        </div>
        <textarea class="outline-textarea" id="comment" name="comment"
            rows="1" cols="33" placeholder="Commentaire utilisateur..."></textarea>
    </div>
</div>
```

## Danger & success message

```html
<div class="ev-alert ev-alert__danger fade show" role="alert" style="width:21rem">
  This is a danger alert—check it out!
  <button type="button" class="ev-alert-close" data-dismiss="alert" aria-label="Close">
  <i class="even-icon-close"></i>
  </button>
</div>
<hr>
<div class="ev-alert ev-alert__success fade show" role="alert" style="width:21rem">
  <p>This is a success alert—check it out!<p>
  <button type="button" class="ev-alert-close" data-dismiss="alert" aria-label="Close">
  <i class="even-icon-close"></i>
  </button>
</div>
```
## Input error

```html
<div class="ev-input-group">
    <label for="validationForm" class="ev-label">Label</label>
  <div class="ev-input">
    <input class="outline-textarea is-error" type="text" id="validationForm" required>
  </div>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
</div>
```