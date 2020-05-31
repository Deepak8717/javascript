import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'
import { Jumbotron } from 'react-bootstrap'

const index = () => {
  return (
    <Layout>
      <Head title='Home' />
      <div className='my-3'>
        <Jumbotron className='m-0 mb-3'>
          <h1 className='m-0 mb-3'>#JSXP</h1>
          <p>
            Get familiar with various JavaScript concepts through small
            projects. Fork/Clone the repository and kick off your journey to
            understand JavaScript.
          </p>
          <p>
            See project source, read existing code, rethink actual idea in your
            imagination and get your idea working while you debug through any
            errors, bugs.
          </p>
          <p>
            The repository contain vanilla JavaScript projects, React projects
            and quick introduction to Redux. All you need is a Laptop, VS Code,
            few VS Code plugins to automate syntax checking, formatting etc. to
            get working.
          </p>
          <p className='m-0'>
            There is no requirement for any sign ups etc. Ideal recommendation
            is to take on one project a day/week and solve it in your own way.
            Once you are confident with JavaScript, try building a major project
            that involves routing, styling, data and ideally a JS framework to
            bypass DOM manipulation. Complement your learning with LeetCode,
            CodeWars.
          </p>
        </Jumbotron>
        <p>
          The purpose of this project is to learn JavaScript concepts and
          encourage understanding of JavaScript topics through small practical
          examples. It allows you a chance to perform code review, understand
          structure of a regular JS project, kickstart a template to build your
          own version of the example at hand. While you go through the example
          sets, complement the learning by picking up a JS book like{' '}
          <strong>Eloquent JavaScript</strong> on the side or a video lecture
          series. Once you gain a strong foundation, find a real world problem
          around you and try to solve it using JavaScript. Keep making it better
          over time and you will eventually fall in love with practice of
          programming in JavaScript.
        </p>
        <p>
          Over your journey of learning JavaScript, you may find times where you
          feel like quitting. Consistency/Grit will play a major factor to help
          you fight those bouts and come out stronger. One of the reason people
          end up in that situation is because either a problem at hand does not
          excite them or they try to follow a video series/perfect code written
          by someone else. Facing a bug and unpreparedness to go through others
          code can be a difficult situation. That is why this project was
          prepared so you get into habit of reading source code, figure out how
          you will handle it yourself, make a plan, write pseudocode, solve bugs
          and eventually refine your program that adheres to modern practices.
        </p>
        <h2>Requirements</h2>
        <p>Download following things before you proceed:</p>
        <ul>
          <li>
            <a
              href='https://code.visualstudio.com/download'
              target='_blank'
              rel='noopener noreferrer'
            >
              VSCode
            </a>
          </li>
          <li>
            <a
              href='https://github.com/prettier/prettier-vscode'
              target='_blank'
              rel='noopener noreferrer'
            >
              Prettier Extension
            </a>
          </li>
          <li>
            <a
              href='https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer'
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Server
            </a>
          </li>
          <li>
            <a
              href='https://github.com/dsznajder/vscode-es7-javascript-react-snippets/blob/master/README.md'
              target='_blank'
              rel='noopener noreferrer'
            >
              ES6 Syntax Formatter
            </a>
          </li>
          <li>
            <a
              href='http://vscode-hacks.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              VSCode Hacks
            </a>
          </li>
        </ul>
        <h2>References</h2>
        <ul>
          <li>
            <a
              href='https://eloquentjavascript.net/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Eloquent JavaScript
            </a>
          </li>
          <li>
            <a
              href='https://www.udemy.com/course/modern-javascript-from-the-beginning/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Brad Traversy
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/playlist?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5'
              target='_blank'
              rel='noopener noreferrer'
            >
              Beau Carnes
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default index
