//eslint-disable-next-line
const fs = require('fs-extra')
//eslint-disable-next-line
const yaml = require('js-yaml')

async function writeMdxFiles(yamlFilePath) {
  try {
    // Load the YAML file
    const yamlContent = await fs.readFile(yamlFilePath, 'utf8')
    const eventsArray = yaml.load(yamlContent)

    for (const event of eventsArray) {
      // Create a filename using the year and the first three words of the description
      const year = event.beginDate.split('-')[0]
      const firstThreeWords = event.description
        .split(' ')
        .slice(0, 3)
        .join('_')
        .replace(/[\/\\?%*:|"<>]/g, '-')
      const fileName = `${year}_${firstThreeWords}.mdx`

      // Create the MDX content
      const frontmatter = `---\nbeginDate: '${event.beginDate}'\n${
        event.endDate ? `endDate: '${event.endDate}'\n` : ''
      }---\n`
      const mdxContent = frontmatter + event.description

      // Write the MDX file
      await fs.writeFile(`./events/_${fileName}`, mdxContent)
      console.log(`Wrote ${fileName}`)
    }
  } catch (err) {
    console.error(`An error occurred: ${err}`)
  }
}

// Create the mdxFiles directory if it doesn't exist
fs.ensureDir('./events').then(() => {
  // Call the function and pass the path to your YAML file
  writeMdxFiles('./events.yaml')
})
