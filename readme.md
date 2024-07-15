# README

JSak fetch APIa erabili ahal izateko lokalean http server bat altsa behar da:

```
python3 -m http.server
```

Honek defektuz `https://localhost:8000` en index.html irekiko du

## Txantiloiak egin

html formatua duen fitxategi bat sortu eta zenbaki segida kontuan izanik izendatu. Kasu honetan `design6.html` izan beharko luke.
Txantiloiean hurrengo IDak dituzten web elementu populagarriak sortu beharko dira:

```
#name - Erabiltzailearen izen abizenak
#title - Lan postua
#quote - Esaldia edo zita
#email - Eposta pertsonala
#phone - Telefono pertsonala
#mastodon - https://mastodon.eus erabiltzaile pertsonala
#coop - Proiektuaren izena
#coopPhone - Proiektuaren telefonoa
#website - Proiektuaren webgunea
#coopEmail - Proiektuaren eposta
#coopMastodon - Proiektuaren mastodon kontua
#logoSvg - Proiektuaren logoa SVG formatuan
```

Txantiloia egoki prestatu ondoren `index.html` fitxategian gehitu, selektorearen eremuan aukera bezala ezarriz:

```
<option value="design6">IZENA</option>
```

## Lizentzia

MIT 2024
