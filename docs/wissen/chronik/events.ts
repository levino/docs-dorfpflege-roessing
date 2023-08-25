const events: { beginDate: string; default: React.FC }[] = []

function importAll(r) {
  r.keys().forEach((filename) => events.push(r(filename)))
}

importAll(require.context('./events', true, /\.mdx$/))

export { events }
