/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('posts').del();
  await knex('posts').insert([
    {
      title: 'React',
      content: 'React is a library for building user interfaces',
      category: 'Framework',
      tags: ['React', 'JavaScript'],
    },
    {
      title: 'Node.js',
      content: 'Node.js is a runtime environment for JavaScript',
      category: 'Runtime',
      tags: ['Node.js', 'JavaScript'],
    },
    {
      title: 'Express',
      content: 'Express is a web framework for Node.js',
      category: 'Framework',
      tags: ['Express', 'Node.js', 'JavaScript'],
    },
  ]);
}
