---
id: divider
title: Divider
---

This is for divider.

## Example

```js
import { Divider } from 'fiber-ui'
```

### Regular

```js live
<>
  <Paragraph>
    Generating random paragraphs can be an excellent way for writers to get
    their creative flow going at the beginning of the day. The writer has no
    idea what topic the random paragraph will be about when it appears. This
    forces the writer to use creativity to complete one of three common writing
    challenges. The writer can use the paragraph as the first one of a short
    story and build upon it. A second option is to use the random paragraph
    somewhere in a short story they create. The third option is to have the
    random paragraph be the ending paragraph in a short story. No matter which
    of these challenges is undertaken, the writer is forced to use creativity to
    incorporate the paragraph into their writing.
  </Paragraph>
  <Divider fontSize={32}>horizontal</Divider>
  <Paragraph>
    A random paragraph can also be an excellent way for a writer to tackle
    writers' block. Writing block can often happen due to being stuck with a
    current project that the writer is trying to complete. By inserting a
    completely random paragraph from which to begin, it can take down some of
    the issues that may have been causing the writers' block in the first place.
  </Paragraph>
  <Divider orientation='left'>left oriented</Divider>
  <Paragraph>
    Another productive way to use this tool to begin a daily writing routine.
    One way is to generate a random paragraph with the intention to try to
    rewrite it while still keeping the original meaning. The purpose here is to
    just get the writing started so that when the writer goes onto their day's
    writing projects, words are already flowing from their fingers.
  </Paragraph>
  <Divider orientation='right'>right orientation</Divider>
  <Paragraph>
    Another writing challenge can be to take the individual sentences in the
    random paragraph and incorporate a single sentence from that into a new
    paragraph to create a short story. Unlike the random sentence generator, the
    sentences from the random paragraph will have some connection to one another
    so it will be a bit different. You also won't know exactly how many
    sentences will appear in the random paragraph.
  </Paragraph>
  <Divider />
  <div>
    <Text>LEFT TEXT</Text>
    <Divider type='vertical' />
    <Text>RIGHT TEXT</Text>
  </div>
</>
```
