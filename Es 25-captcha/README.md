> Es 25 - Captcha

# Sommario:
Con questo esercizio abbiamo ricreato una semplice compilazione di un form con anche l'opzione "Non sono un robot" e l'inserimento del codice del captcha.

# Componenti:
- TextBox per l'inserimento delo username.
- TextBox per l'inserimento della password.
- immagine del captcha. Ogni volta che viene ricaricata la pagina o dopo aver cliccato su "Genera un'altro captcha", venivano visualizzate altre lettere.
- TextBox per l'inserimento del captcha.
- tasto invia per simulare l'invio della form.

# Dettagli:
Per generare il codice del captcha, abbiamo utilizzato un generatore di numeri random con la quale generavamo le coordinate (x e y) per andare a spostare l'immagine sotto i div e visualizzare l'immagine della lettera presente in quella posizione.
