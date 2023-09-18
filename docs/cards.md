# Cards

## Basic Card

```html
<div class="ev-card" style="width:37rem">
    <div class="ev-card__body">
        <div class="ev-card__header">
            <h5 class="ev-card__title">Special title treatment</h5>
        </div>
        <div class="ev-card__content">
            <p class="ev-card__text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="ev-card__footer">
            <a href="#" type="button" class="ev-btn primary small">Button</a>
            <a href="#" type="button" class="ev-btn outline-btn small" disabled>Button</a>
        </div>
    </div>
</div>
```

## Affectation Card

```html
<div class="ev-card">
    <div class="ev-card__body">
        <div class="ev-card__header">
            <h5 class="ev-card__title"> Affectation sélectionnée</h5>
        </div>
        <div class="ev-card__content">
            <div class="icon-col flex col-12">
                <i class="affectation even-icon-fill-car"></i>
                <p class="affectation__text">Transports</p>
            </div>
            <div class="info-col flex col-12">
                <span class="affectation even-icon-info">
                    <span class="affectation__info">A savoir</span> </span>
                <p class="ev-card__text-nature">With supporting text below as a natural lead-in to additional content.
                    change your content here and aply the modification. this text is a legend…</p>
                <div class="details">
                    <p class="details__text">Détails</p>
                    <a href="#">
                        <i class="color-cards-icon even-icon-arrow"></i>
                    </a>
                </div>
            </div>
            <div class="ev-card__footer">
                <a href="#" type="button" class="ev-btn outline-btn small">Désaffecter</a>
                <a href="#" type="button" class="ev-btn outline-btn small">Modifier</a>
            </div>
        </div>
    </div>
</div>
</div>
```

## Affectation Mobile Card

```html
<div class="ev-card-pwa" style="width:27rem">
    <div class="ev-card-pwa__body">
        <div class="ev-card-pwa__header">
            <span class="ev-card-pwa__title">Affecter</span>
        </div>
        <div class="ev-card-pwa__content flex">
            <div class="icon-col__pwa">
                <i class="affectation even-icon-fill-car"></i>
                <p class="affectation__pwa__text">Transports</p>
            </div>
            <div class="ev-card-pwa__footer">
                <div class="icon-col__pwa">
                    <div class="details">
                        <a href="#" type="button" class="ev-btn outline-btn small">Modifier</a>
                        <a href="#" type="button" class="ev-btn outline-btn small">Désaffecter</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```
## Operation Mobile Card

```html
<div class="ev-card-pwa" style="width:27rem">
    <div class="ev-card-pwa__body">
        <div class="ev-card-pwa__header">
            <span class="ev-card-pwa__title-operation">Découpage des mouvements <br>bancaires</span>
        </div>
        <div class="operation-col__pwa flex justify-end col-9">
            <label class="ev-label-pwa__right" for="pass">Libellé</label>
        </div>
        <div class="ev-card-pwa__operations mb1">
            <div class="operation-col__pwa flex col-9">
                <div class="ev-input-group">
                    <div class="ev-input" style="width: 17rem;">
                        <input placeholder="Saisissez un libellé explicite" type="text" class="ev-input__pwa">
                    </div>
                </div>
            </div>
        </div>
        <div class="operation-col__pwa flex justify-end col-9">
            <label class="ev-label-pwa__right" for="pass">Montant TTC</label>
        </div>
        <div class="ev-card-pwa__operations">
            <div class="operation-col__pwa flex col-9">
                <div class="ev-input-group">
                    <div class="ev-input" style="width: 17rem;">
                        <input placeholder="1200.00€" type="text" class="ev-input__pwa align-right">
                    </div>
                </div>
            </div>
            <div class="operation-col__pwa flex justify-center col-3">
                <a href="#">
                    <i class="color-cards-icon__pwa even-icon-delete"></i>
                </a>
            </div>
        </div>
    </div>
</div>
```