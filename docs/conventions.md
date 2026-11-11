---
id: conventions
title: Conventions
sidebar_position: 2
---

# Conventions

## Base URLs

Each API lives on its own host, and paths in this reference are relative to that host's base URL.

| API | Base URL |
| --- | --- |
| Main site | `https://haulmp.com/api` |
| Live map | `https://map.haulmp.com` (note: no `/api` prefix on most paths) |
| Accounts | `https://accounts.haulmp.com/api` |
| Company platform | `https://vtc.haulmp.com/api` |
| Forum | `https://forum.haulmp.com/api/forum` |

## Path placeholders

Values in curly braces are filled in by the client, for example `{slug}` or `{c}`. On the company platform, `{c}` is a **company id**.

## Query strings

Query parameters appear after `?` in the endpoint heading (for example `?page=`). Their exact accepted values aren't specified in the source; the parameter tables note what is known.

## Methods

The methods shown are the ones the site code actually sends. A method marked *inferred* in the source is flagged where it appears.

## Authentication

Every endpoint documented here is callable without being signed in. Where an endpoint is part of a sign-in flow, it is labelled.
