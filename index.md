---
layout: default
title: Home
description: The resident website for our cooperative building
---

<!-- Hero photo: to use a real photo, save a wide image as assets/img/hero.jpg
     (or .webp/.png) and change the src below. -->
<figure class="hero">
  <img src="assets/img/hero.svg" alt="Placeholder — wide photo of the building">
  <figcaption>Placeholder — replace <code>assets/img/hero.svg</code> with a wide photo of the building.</figcaption>
</figure>

<h1>Hi, neighbours</h1>
<p class="lead">The resident website for our cooperative building — announcements, events, and the documents that keep things running.</p>

<div class="cards">
  <a class="card" href="about.html">
    <div class="card-title">About the coop</div>
    <div class="card-desc">How our building works</div>
  </a>
  <a class="card" href="gallery.html">
    <div class="card-title">Gallery</div>
    <div class="card-desc">Photos of the building</div>
  </a>
  <a class="card" href="events.html">
    <div class="card-title">Events &amp; meetings</div>
    <div class="card-desc">What's coming up</div>
  </a>
  <a class="card" href="documents.html">
    <div class="card-title">Documents</div>
    <div class="card-desc">Rules, minutes &amp; downloads</div>
  </a>
  <a class="card" href="contact.html">
    <div class="card-title">Contact</div>
    <div class="card-desc">Board &amp; neighbours</div>
  </a>
</div>

<h2>Latest announcements</h2>
<ul class="post-list">
{% for post in site.posts limit: 5 %}
  <li>
    <span class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></span>
    <span class="post-date">{{ post.date | date: "%b %d, %Y" }}</span>
  </li>
{% endfor %}
</ul>
