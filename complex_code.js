// filename: complex_code.js

/*
This code demonstrates a complex implementation of a social media application. It includes functionalities such as creating accounts, posting messages, following/unfollowing other users, and displaying a user's timeline.

Note: This code is an oversimplified example for demonstration purposes, and it may not include necessary security measures or error handling.

Usage:
- Run the main function to execute the code.
- Follow the prompts in the console to interact with the social media application.

*/

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.following = [];
    this.timeline = [];
  }
  
  postMessage(message) {
    this.timeline.push(message);
  }
  
  follow(user) {
    if (!this.following.includes(user)) {
      this.following.push(user);
    }
  }
  
  unfollow(user) {
    const index = this.following.indexOf(user);
    if (index > -1) {
      this.following.splice(index, 1);
    }
  }
}

class SocialMediaApp {
  constructor() {
    this.users = {};
  }
  
  register() {
    const username = prompt('Enter username:');
    const email = prompt('Enter email:');
    
    if (this.users.hasOwnProperty(username)) {
      console.log('Username already taken. Please try again with a different username.');
      return;
    }
    
    const newUser = new User(username, email);
    this.users[username] = newUser;
    
    console.log(`User ${username} registered successfully!`);
  }
  
  postMessage() {
    const username = prompt('Enter username:');
    const message = prompt('Enter your message:');
    
    const user = this.users[username];
    
    if (!user) {
      console.log('Invalid username. Please try again with a registered username.');
      return;
    }
    
    user.postMessage(message);
    console.log(`Message posted by ${username}: ${message}`);
  }
  
  follow() {
    const followerUsername = prompt('Enter your username:');
    const followingUsername = prompt('Enter the username you want to follow:');
    
    const follower = this.users[followerUsername];
    const following = this.users[followingUsername];
    
    if (!follower || !following) {
      console.log('Invalid username(s). Please try again with registered usernames.');
      return;
    }
    
    follower.follow(following);
    console.log(`${followerUsername} is now following ${followingUsername}.`);
  }
  
  unfollow() {
    const followerUsername = prompt('Enter your username:');
    const followingUsername = prompt('Enter the username you want to unfollow:');
    
    const follower = this.users[followerUsername];
    const following = this.users[followingUsername];
    
    if (!follower || !following) {
      console.log('Invalid username(s). Please try again with registered usernames.');
      return;
    }
    
    follower.unfollow(following);
    console.log(`${followerUsername} has unfollowed ${followingUsername}.`);
  }
  
  displayTimeline() {
    const username = prompt('Enter username:');
    
    const user = this.users[username];

    if (!user) {
      console.log('Invalid username. Please try again with a registered username.');
      return;
    }
    
    console.log(`Timeline for user ${username}:`);
    console.log(user.timeline);
  }
}

function main() {
  const socialMediaApp = new SocialMediaApp();
  
  console.log('--- Welcome to SocialMediaApp ---');
  console.log('Command options: register, post, follow, unfollow, timeline, exit');
  
  let command = '';
  while (command !== 'exit') {
    command = prompt('Enter a command (or exit to quit):');
    
    switch (command) {
      case 'register':
        socialMediaApp.register();
        break;
      case 'post':
        socialMediaApp.postMessage();
        break;
      case 'follow':
        socialMediaApp.follow();
        break;
      case 'unfollow':
        socialMediaApp.unfollow();
        break;
      case 'timeline':
        socialMediaApp.displayTimeline();
        break;
      case 'exit':
        console.log('Goodbye!');
        break;
      default:
        console.log('Invalid command. Please try again with a valid command or enter exit to quit.');
        break;
    }
  }
}

main();