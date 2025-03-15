## Welcome

Welcome to pampanet.org, this is my corner of the internet where I intend to show my skills with my own Software Development portfolio, and eventually my own products.

This is a new experience, so you are welcome to [contact us](#/contact) about how we are doing it any time.

## Our Mission

Given that the software industry is in continuous change, **it's not always clear to tell if our culture is really** transforming for the better and the common wealth, or in simpler terms, **evolving**. 

So this company's focus and mission is to **make software that can help us evolve**, always finding new challenges while focusing on giving the best user experience today.


## Our Products

### Chatbot PoC: 

link: [chat-bot](#/chat-bot)

During 2024, I developed a PoC of a chat bubble with streamed content that can be used for chatbots and other texts that need to be displayed slower so the user can read it at a normal pace.

Personally I think this component could be used in systems where people want to read a response/answer and not just copy-paste it, so it's great for story telling use cases as well as AI agents for counseling where pauses and reading have more feeling than just the average news article.

This chat bubble is configured by default at 40Hz, which is similar to the typewriter's speed used on "Where in the world is Carmen San Diego?". 

The main technical advantage of using a typewriter effect is that **buffering a streaming input** allows any system to provide a seemless experience whithout the user having to worry about networking bandwidth and/or download speeds.

This technique is widely used in media players such as YouTube or Spotify.

The chatbot itself uses Gemini AI to provide answers. 

In the feature list, there is:

- Context switching
- Context and conversations are kept until browser refresh
- Text only comunication
- 40 Hz typewriter effect

If you would like to have a quick demo about this and future releases, please [contact us](#/contact)

### TorreLetras:

link: [TorreLetras](#/torre-letras)

This is a game of word searching in spanish. I personally love the english version of this game and couldn't find any spanish one, so I went ahead and made this Flutter web version of the game to try complex animations and game dev techniques.

If you would like to test your spanish skills, please try this game and let me know your thoughts. I personally play it every day to test my spanish vocabulary.

If you would like to have a quick demo about this and future releases, please [contact us](#/contact)

### Mulita: File Archiver

In 2024, pampanet.org has focused on releasing a multi-platform file archiver, to bring back the experience of browsing the contents of a zip file without wondering if there's enough disk space and choosing which files to extract like in the good old days. 
Since the app is multi-platform, the backend has to be as robust and efficient as it can be so it's going to rely on native technologies using Foreign Function Interfacing (a.k.a. FFI) to provide high speeds for operating with files.

The company will release free and premium versions for iOS and Android, but also target desktop platforms such as Windows, MacOS and Linux.

If you would like to have a quick demo about this and future releases, please [contact us](#/contact)

### BLE Serial Console

Back in 2018, I released an application to interact with bluetooth breakout boards for arduino as part of a pet project. Since then, the app has had more than 5k installs and counted with several hundreds of active users.

The application had the following features:

- Connect to a BLE device
- Browse a BLE device services and characteristics
- Subscribe to a BLE GATT Characteristic for updates
- Send and receive information using [AT commands](https://en.wikipedia.org/wiki/Hayes_AT_command_set)
- Provide a serial terminal/console to communicate with HM-10 BLE Modules
- BLE Module distance estimation using RSSI Kalman filtering (in beta)

The company will continue the development of this product during 2024 providing support for android and expanding this support to other platforms as well.


