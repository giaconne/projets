import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
    
    //Message d'erreur applicable dans tous les domaines
    'required': 'The {{ field }} field is required', //Le champs {{field}} est obligatoire
    'string': 'The value of {{ field }} field must be a string', //La valeur {{field}} du champs doit être une chaîne
    'email': 'The value is not a valid email adress', //La valeur n'est pas un champs vide
    'username.required': 'Please chose a username for your account', //Message d'erreurs pour champs de nom d'utilisateur
})
