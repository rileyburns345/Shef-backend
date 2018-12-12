import OAuthManager from 'react-native-oauth';

const manager = new OAuthManager('facebook')
manager.configure({
  facebook: {
    callback_url: `https://localhost:3000/auth/callback`,
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_SECRET'
  }
});

manager.authorize('facebook', {scopes: 'profile email'})
.then(resp => console.log('Your users ID'))
.catch(err => console.log('There was an error'));