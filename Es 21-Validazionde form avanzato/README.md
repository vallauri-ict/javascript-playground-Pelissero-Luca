> Es 21 - Compilazione Form (avanzato)

# Sommario:
Lo scopo di questo esercizio è uguale a quello precedente (Es 20-Compilazione form) ma abbiamo cercato di ripeodurre un Form più
"avanzato": lo abbiamo fatto sembrare, esteticamente, più realistico e abbiamo apportato miglioramenti nel codice.
## Informazioni sul funzionamento:
Nell'esercizio precedente la verifica della corretta compilazione dei campi veniva effettuata solo al momento del click sul pulsante
**INVIA**. In questo Esercizio la verifica sui campi viene eseguita appena vado a modificare il contenuto di un campo; questo 
avviene tramite l'evento **onChange**. Sia nel momento in cui vado a cliccare sul pulsante **INVIA** sia quando vado a modificare il contenuto
dei campi, la pagina HTML mi avviserà della presenza di eventuali errori durante la compilazione tramite avvisi della pagina (**alert**) o tramite
il cambiamento di colore del bordo del campo dove vi sono degli errori (da grigio a rosso). 

Nel form troviamo anche un **checkBox** per indicare se lo studente lavora o no. La particolarità è che se il **checkBox** è **checked**
la casella di testo, che si trova al fondo della pagina, passerà da "**.disabled=true**" a "**.disabled=false**" e viceversa.
