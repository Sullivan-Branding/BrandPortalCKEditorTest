/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'ku' ]: { dictionary, getPluralForm } } = {"ku":{"dictionary":{"Words: %0":"وشەکان: %0","Characters: %0":"نووسەکان: %0","Widget toolbar":"تووڵامرازی ویدجێت","Insert paragraph before block":"","Insert paragraph after block":"","Press Enter to type after or press Shift + Enter to type before the widget":"","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"","Insert a new paragraph directly after a widget":"","Insert a new paragraph directly before a widget":"","Move the caret to allow typing directly before a widget":"","Move the caret to allow typing directly after a widget":"","Move focus from an editable area back to the parent widget":"","Upload in progress":"بارکردنەکە لە جێبەجێکردن دایە","Undo":"وەک خۆی لێ بکەوە","Redo":"هەلگەڕاندنەوە","Rich Text Editor":"سەرنوسەری دەقی بەپیت","Edit block":"دەستکاری بلۆک","Click to edit block":"","Drag to move":"","Next":"دواتر","Previous":"پێشتر","Editor toolbar":"تووڵامرازی دەسکاریکەر","Dropdown toolbar":"تووڵامرازی لیستەیی","Dropdown menu":"","Black":"ڕەش","Dim grey":"ڕەساسی تاریک","Grey":"ڕەساسی","Light grey":"ڕەساسی ڕووناک","White":"سپی","Red":"سور","Orange":"پرتەقاڵی","Yellow":"زەرد","Light green":"سەوزی ڕووناک","Green":"سەوز","Aquamarine":"شینی دەریایی","Turquoise":"شینی ئاسمانی","Light blue":"شینی ڕووناک","Blue":"شین","Purple":"مۆر","Editor block content toolbar":"","Editor contextual toolbar":"","HEX":"","No results found":"","No searchable items":"","Editor dialog":"","Close":"","Help Contents. To close this dialog press ESC.":"","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"","(may require <kbd>Fn</kbd>)":"","Accessibility":"","Accessibility help":"","Press %0 for help.":"","Move focus in and out of an active dialog window":"","MENU_BAR_MENU_FILE":"","MENU_BAR_MENU_EDIT":"","MENU_BAR_MENU_VIEW":"","MENU_BAR_MENU_INSERT":"","MENU_BAR_MENU_FORMAT":"","MENU_BAR_MENU_TOOLS":"","MENU_BAR_MENU_HELP":"","MENU_BAR_MENU_TEXT":"","MENU_BAR_MENU_FONT":"","Editor menu bar":"","Please enter a valid color (e.g. \"ff0000\").":"","Insert table":"خشتە دابنێ","Header column":"ستوونی دەسپێک","Insert column left":"دانانی ستوون لە چەپ","Insert column right":"دانانی ستوون لە ڕاست","Delete column":"سڕینەوەی ستوون","Select column":"","Column":"ستوون","Header row":"ڕیزی دەسپێک","Insert row below":"دانانی ڕیز لە ژێرەوە","Insert row above":"دانانی ڕیز لە سەرەوە","Delete row":"سڕینەوەی ڕیز","Select row":"","Row":"ڕیز","Merge cell up":"تێکەڵکردنی خانەکان بەرەو سەر","Merge cell right":"تێکەڵکردنی خانەکان بەرەو ڕاست","Merge cell down":"تێکەڵکردنی خانەکان بەرەو ژێرەوە","Merge cell left":"تێکەڵکردنی خانەکان بەرەو چەپ","Split cell vertically":"بەشکردنی خانەکان بە ئەستوونی","Split cell horizontally":"بەشکردنی خانەکان بە ئاسۆیی","Merge cells":"تێکەڵکردنی خانەکان","Table toolbar":"تووڵامرازی خشتە","Table properties":"","Cell properties":"","Border":"","Style":"","Width":"","Height":"","Color":"","Background":"","Padding":"","Dimensions":"","Table cell text alignment":"","Alignment":"","Horizontal text alignment toolbar":"","Vertical text alignment toolbar":"","Table alignment toolbar":"","None":"","Solid":"","Dotted":"","Dashed":"","Double":"","Groove":"","Ridge":"","Inset":"","Outset":"","Align cell text to the left":"","Align cell text to the center":"","Align cell text to the right":"","Justify cell text":"","Align cell text to the top":"","Align cell text to the middle":"","Align cell text to the bottom":"","Align table to the left":"","Center table":"","Align table to the right":"","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"","Color picker":"","Enter table caption":"","Keystrokes that can be used in a table cell":"","Move the selection to the next cell":"","Move the selection to the previous cell":"","Insert a new table row (when in the last cell of a table)":"","Navigate through the table":"","Table":"","Disable editing":"لەکارخستنی جاکسازی","Enable editing":"بەکارخستنی چاکسازی","Previous editable region":"ناوچەی چاکسازی پێشوو","Next editable region":"ناوچەی چاکسازی داهاتوو","Navigate editable regions":"چوون بۆ ناوچەی چاکسازی","Remove Format":"لابردنی شێواز","Page break":"کۆتایهێنانی پەڕە","media widget":"ویدجێتتی مێدیا","Media URL":"بەستەری مێدیا","Paste the media URL in the input.":"بەستەری مێدیاکە لە خانەکە بلکێنە.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","The URL must not be empty.":"پێویستە بەستەر بەتاڵ نەبێت.","This media URL is not supported.":"ئەم بەستەری مێدیایە پاڵپشتی ناکرێت.","Insert media":"مێدیا دابنێ","Media":"","Media toolbar":"تووڵامرازی مێدیا","Open media in new tab":"","Numbered List":"لیستەی ژمارەیی","Bulleted List":"لیستەی خاڵەیی","To-do List":"لیستەی کردن","Bulleted list styles toolbar":"","Numbered list styles toolbar":"","Toggle the disc list style":"","Toggle the circle list style":"","Toggle the square list style":"","Toggle the decimal list style":"","Toggle the decimal with leading zero list style":"","Toggle the lower–roman list style":"","Toggle the upper–roman list style":"","Toggle the lower–latin list style":"","Toggle the upper–latin list style":"","Disc":"","Circle":"","Square":"","Decimal":"","Decimal with leading zero":"","Lower–roman":"","Upper-roman":"","Lower-latin":"","Upper-latin":"","List properties":"","Start at":"","Invalid start index value.":"","Start index must be greater than 0.":"","Reversed order":"","Keystrokes that can be used in a list":"","Increase list item indent":"","Decrease list item indent":"","Entering a to-do list":"","Leaving a to-do list":"","Unlink":"لابردنی بەستەر","Link":"بەستەر","Link URL":"ناونیشانی بەستەر","Link URL must not be empty.":"","Link image":"","Edit link":"دەستکاری بەستەر","Open link in new tab":"کردنەوەی بەستەرەکە لە پەڕەیەکی نوێ","This link has no URL":"ئەم بەستەرە ناونیشانی نیە","Open in a new tab":"کردنەوەی لە پەنجەرەیەکی نوێ","Downloadable":"Downloadable","Create link":"","Move out of a link":"","Increase indent":"زیادکردنی بۆشایی","Decrease indent":"کەمکردنەوەی بۆشایی","image widget":"وێدجیتی وێنە","Wrap text":"","Break text":"","In line":"","Side image":"لای وێنە","Full size image":"پڕ بەقەبارەی وێنە","Left aligned image":"ڕیزکردنی وێنە بۆ لای چەپ","Centered image":"ناوەڕاستکراوی وێنە","Right aligned image":"ڕیزکردنی وێنە بۆ لای ڕاست","Change image text alternative":"گۆڕینی جێگروەی تێکیسی وێنە","Text alternative":"جێگرەوەی تێکست","Enter image caption":"سەردێڕی وێنە دابنێ","Insert image":"وێنە دابنێ","Replace image":"","Upload from computer":"","Replace from computer":"","Upload image from computer":"","Image from computer":"","From computer":"","Replace image from computer":"","Upload failed":"بارکردنەکە سەرنەکەووت","You have no image upload permissions.":"","Image toolbar":"تووڵامرازی وێنە","Resize image":"","Resize image to %0":"","Resize image to the original size":"","Resize image (in %0)":"","Original":"","Custom image size":"","Custom":"","Image resize list":"","Insert image via URL":"","Insert via URL":"","Image via URL":"","Via URL":"","Update image URL":"","Caption for the image":"","Caption for image: %0":"","The value must not be empty.":"","The value should be a plain number.":"","Uploading image":"","Image upload complete":"","Error during image upload":"","Image":"","Horizontal line":"هێڵی ئاسۆیی","Yellow marker":"نیشانەکەری  زەرد","Green marker":"نیشانەکەری  سەوز","Pink marker":"نیشانەکەری پەمەیی","Blue marker":"نیشانەکەری  شین","Red pen":"پێنووسی سۆر","Green pen":"پێنووسی سەوز","Remove highlight":"لابردنی بەرچاوکەر","Highlight":"بەرچاوکردن","Text highlight toolbar":"تووڵامرازی نیشانکردنی تێکست","Paragraph":"پەراگراف","Heading":"سەرنووسە","Choose heading":"سەرنووسە هەڵبژێرە","Heading 1":"سەرنووسەی 1","Heading 2":"سەرنووسەی 2","Heading 3":"سەرنووسەی 3","Heading 4":"سەرنووسەی 4","Heading 5":"سەرنووسەی 5","Heading 6":"سەرنووسەی 6","Type your title":"نوسینی ناونیشان","Type or paste your content here.":"بنووسە یاخوود ناوەڕۆکی کۆپیکراو لیڕە بلکێنە","Font Size":"قەبارەی فۆنت","Tiny":"گچکە","Small":"بچوک","Big":"گەورە","Huge":"زۆر گەورە","Font Family":"فۆنتی خێزانی","Default":"بنچینە","Font Color":"ڕەنگی فۆنت","Font Background Color":"ڕەنگی پاشبنەمای فۆنت","Document colors":"ڕەنگەکانی دۆکومێنت","Cancel":"هەڵوەشاندنەوە","Clear":"","Remove color":"لابردنی ڕەنگ","Restore default":"","Save":"پاشکەوتکردن","Show more items":"بڕگەی زیاتر نیشانبدە","%0 of %1":"%0 لە %1","Cannot upload file:":"پەڕگەکە ناتوانرێت باربکرێت:","Rich Text Editor. Editing area: %0":"","Insert with file manager":"","Replace with file manager":"","Insert image with file manager":"","Replace image with file manager":"","File":"","With file manager":"","Toggle caption off":"","Toggle caption on":"","Content editing keystrokes":"","These keyboard shortcuts allow for quick access to content editing features.":"","User interface and content navigation keystrokes":"","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"","Close contextual balloons, dropdowns, and dialogs":"","Open the accessibility help dialog":"","Move focus between form fields (inputs, buttons, etc.)":"","Move focus to the menu bar, navigate between menu bars":"","Move focus to the toolbar, navigate between toolbars":"","Navigate through the toolbar or menu bar":"","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"","Accept":"","Insert code block":"دانانی  خشتەی کۆد","Plain text":"تێکستی سادە","Leaving %0 code snippet":"","Entering %0 code snippet":"","Entering code snippet":"","Leaving code snippet":"","Code block":"","Insert image or file":"وێنە یان پەڕگە دابنێ","Could not obtain resized image URL.":"نەتوانرا بەستەری وێنەی قەبارە گۆڕاو بەدەست بێت.","Selecting resized image failed":"دیاریکردنی وێنەی قەبارە گۆڕاو سەرکەوتوو نەبوو","Could not insert image at the current position.":"نەتوانرا وێنە دابنرێت لەم شوێنە.","Inserting image failed":"دانانی وێنە سەرکەوتوو نەبوو","Block quote":"وتەی وەرگیراو","Bold":"قەڵەو","Italic":"لار","Underline":"ژێرهێڵ","Code":"کۆد","Strikethrough":"هێڵ بەسەرداهاتوو","Subscript":"ژێرنووس","Superscript":"سەرنووس","Italic text":"","Move out of an inline code style":"","Bold text":"","Underline text":"","Strikethrough text":"","Saving changes":"گۆڕانکاریەکان پاشکەوتدەکرێت","Align left":"بەهێڵکردنی چەپ","Align right":"بەهێڵکردنی ڕاست","Align center":"بەهێڵکردنی ناورەڕاست","Justify":"هاوستوونی","Text alignment":"ڕیززکردنی تێکست","Text alignment toolbar":"تووڵامرازی ڕیززکردنی تێکست"},getPluralForm(n){return (n != 1);}}};
e[ 'ku' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'ku' ].dictionary = Object.assign( e[ 'ku' ].dictionary, dictionary );
e[ 'ku' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );