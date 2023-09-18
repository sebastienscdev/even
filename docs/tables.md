# Tables

## basic table

### striped color table

```html
<table class="ev-table table-striped">
  <thead>
    <tr>
      <th class="date">Date</th>
      <th class="nature">Nature</th>
      <th class="libellé">Libellé</th>
      <th class="montant">Montant (dont TVA)</th>
      <th class="piece">Pièces</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="date">12 décembre</td>
      <td class="nature">
        <button class="icon-btn-nature">
          <i class="even-icon-fill-lockerhouse"></i>
        </button>
      </td>
      <td><span class="affectation-libelle">information</span><br><span class="affectation-content"> Virement First
          Shagia Hotel</span></td>
      <td class="montant"><span class="tva-montant--positive">+ 18 060,00€ </span> <br>
        <legend class="tva-legend">Dont TVA 20% (3 612,00€)<legend>
      </td>
      <td class="piece">
        <span class="even-icon-erreur"></span>
      </td>
    </tr>
    <tr>
      <td class="date">12 décembre</th>
      <td class="nature">
        <a href="#" type="button" class="ev-btn primary small">
          <span>Affecter</span>
        </a>
      </td>
      <td><span class="affectation-libelle">information</span><br><span class="affectation-content"> Cb Uber
          Paris</span></td>
      <td class="montant"><span class="tva-montant--negative">- 5 060,00€ </span> <br>
        <legend class="tva-legend">Dont TVA 20% (3 612,00€)<legend>
      </td>
      <td class="piece">
        <div class="tooltips icon-comment"><span class="even-icon-comment"></span>
        </div>
      </td>
    </tr>
    <tr>
      <td class="date">12 décembre</th>
      <td class="nature">
        <a href="#" type="button" class="ev-btn primary small">
          <span>Affecter</span>
        </a>
      </td>
      <td><span class="affectation-libelle">information</span><br><span class="affectation-content"> Cb Delivroo
          Nantes</span></td>
      <td class="montant"><span class="tva-montant--negative">- 5 060,00€ </span> <br>
        <legend class="tva-legend">Dont TVA 20% (3 612,00€)<legend>
      </td>
      <td class="piece">
        <span class="even-icon-pdf"></span>
      </td>
    </tr>
  </tbody>
</table>
```
