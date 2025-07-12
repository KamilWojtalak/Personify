# Personify

**TL;DR: Personify lets you organize contacts into personas, capture key notes, and instantly get personalized conversation topics and recommendations.**

Personify is a simple app that helps you create personal profiles, take notes, and get context for conversations with people similar to your ideal personas.

Notes such as:
- interaction history
- repetitive topics
- social links

I built this because I had trouble making new connections in my 20s. Now I always have topics to discuss based on what I've learned. Cold outreach is no longer that cold 😁

You can create multiple ideal personas as templates, add real people, and assign each person to one or more personas.

Personify aggregates information about everyone you meet and lets you quickly scan who you should reach out to next, and what to write about to them.

If someone asks me to recommend a contact - for example, someone needs a business card website and wants a WordPress developer - I can easily find the right person with my saved notes. I can look at all the WordPress developers I've messaged and pick the best one based on my notes.

It's also useful for meeting new contacts when doing cold DM-ing in a specific industry. I can see the common problems people in an ideal persona-like a Laravel developer-have faced and personalize my message. For example, instead of a plain “Hey, how are you?”, I could ask if they've ever implemented GraphQL in Laravel. This way, you jump straight into a meaningful topic instead of making small talk about the weather.

Does it make sense? I don't know. I'm trying my best :D

## How to setup

- sail
```
tbc... to be updated

sail up -d

sail npm run dev

sail artisan migrate:fresh --seed

docker compose exec laravel.test ./vendor/bin/pint

sail php artisan ide-helper:models -RW
```

TODO
- add Larastan
