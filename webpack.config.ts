import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const isDevelopment = process.env.NODE_ENV !== 'production';

const config: webpack.Configuration = {
  name: 'sleact',
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'hidden-source-map' : 'eval',
  resolve: {
    // 바벨이 처리해줄 파일 확장자 목록
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    // tsconfig에서 path 설정해준 디렉토리
    // ../../ 이런 거 없애줌. tsconfig와 webpack에서 모두 적용시켜주어야 함.
    alias: {},
  },
  // 메인 파일? 검색 필요.
  entry: {
    app: './client',
  },
  module: {
    // 바벨 로더가 ts나 tsx 파일을 자바스크립트로 바꿔줄 때 적용할 설정
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env', // 브라우저 지원
              {
                targets: { browsers: ['last 2 chrome versions'] }, // 최신 크롬 버전 두 개 지원
                debug: isDevelopment,
              },
            ],
            '@babel/preset-react', // 리액트 코드 변환해주는 것 검색 필요.
            '@babel/preset-typescript', // 타입스크립트 ? 검색 필요.
          ],
          // webpack-dev-server, webpack-cli 라이브러리 필요. 파일 저장시 리로딩(핫리로딩). cors 문제도 해결해줌.
          env: {
            development: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        // 바벨 로더가 css 파일을 자바스크립트로 바꿔줄 때 사용하는 설정
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'], // 이 로더가 만들어줌
      },
    ],
  },
  plugins: [
    // 기존 type check와 웹팩 실행이 순서대로 실행되던 것을 동시에 실행되게 해줘서 더 효율적임.
    new ForkTsCheckerWebpackPlugin({ async: false }),
    // process.env 는 Node 런타임에서만 사용 가능한데, 밑에 함수가 프론트에서 사용할 수 있게 해줌.
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }),
  ],
  // entries에서부터 적용해왔던 설정들이 여기서 나옴.
  // alecture/dist/app.js 가 생성됨
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    publicPath: '/dist/',
  }
};

// 개발환경에서 사용할 플러그인
if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: false }));
}

// 배포환경에서 사용할 플러그인
if (!isDevelopment && config.plugins) {
  config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
}

export default config;