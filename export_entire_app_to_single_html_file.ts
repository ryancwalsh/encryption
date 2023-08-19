// Run via `yarn export_to_single_file`.

import * as fs from 'fs';

const destination = 'public/main.html';
const windowTitle = 'Encryption helper';

function getCssTags(): string {
  return 'TODO';
}

function getJsTags(): string {
  return 'TODO';
}

function getHtmlBody(): string {
  return 'TODO';
}

const exportEntireGatsbyAppToSingleHtmlFile = async (): Promise<void> => {
  try {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${windowTitle}</title>
        ${getCssTags()}
        ${getJsTags()}
      </head>
      <body>
        <div id="root">${getHtmlBody()}</div>
      </body>
      </html>
    `;

    fs.writeFileSync(destination, html, 'utf-8');
    console.log(`Exported to ${destination}`);
  } catch (error) {
    console.error('Error generating single HTML:', error);
  }
};

exportEntireGatsbyAppToSingleHtmlFile();
