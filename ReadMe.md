Base files for new react project.

To start run:

	npm init
	npm install react react-dom --save
	// npm instal babel webpack webpack-dev-server -g // if new machine
	npm install babel-loader babel-core babel-preset-es2015 babel-preset-react

	edit package.json with a new script
		"scripts": {
    "start": "webpack-dev-server"
  	},