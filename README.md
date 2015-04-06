# Lightbox &mdash; An accessible lightbox

The goal of this project is to create a fully accessible lightbox. Modal dialogs, like lightboxes, are used often throughout the web but their effect on accessibility may not be considered.

In general, the opening of a lightbox takes the user out of the moment. It is a sudden visual change in the browser, and a sudden content change on a screenreader. We must make this as accessible as possible, to reduce confusion when using the lightbox (intentionally or accidentally).

The most accessible ligthtbox is to not have a lightbox at all. However, if you really have to have a lightbox, it must be made as accessible as possible.

This is not the first lightbox project, whether accessible or not. However, through my research I have found that many lightbox projects are now outdated, are not fully accessible, or do not have a good accompanying documentation or tutorial.

This project is not just about providing an accessible option, but to learn how to build one in the first place and then go on to provide a step by step tutorial on how to create one for yourselves. 

### Basic Considerations

1. A coherent standard behaviour for keyboard navigation
1. Coherent element focus when using TAB
1. Correct use of ARIA roles
1. Responsive
1. Progressive enhancement &mdash; if JavaScript is off, act appropriately

### Detailed Considerations

#### Aria Roles
- `alertdialog` role announces the contents of the dialog to the user
- `aria-labelledby` on lightbox container to identify header labelling the lightbox
- `aria-describedby` to identify the message of the `alertdialog`
- Other roles as necessary for webpage as a whole

#### Keyboard Navigation
- `ENTER` Key &mdash; Default `submit` action
- `ESCAPE` Key &mdash; Close dialog without taking action
- `TAB` Key &mdash; Focus elements within the dialog, not outside

#### Browser Width
- Dialog must be responsive
- Potential to disable lightbox at smallest widths

#### Miscellaneous
- Dialog to be moveable via the mouse
- When dialog opens, focus is set to the first focusable element in the lightbox
- When dialog closes, focus returns to what was in focus before the dialog opened
- User should not be able to TAB into the background when the dialog is open
- Visible `close` button in the dialog
- Visible descriptions of other close actions (`ESC` to close)
