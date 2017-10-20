import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/react-aurora-redux.js',
    name: 'AuroraRedux',
    format: 'umd',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
