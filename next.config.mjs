const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/, // '.svg' 파일만 해당 규칙을 적용
      use: ['@svgr/webpack'], // SVGR 로더 사용
    });

    return config; // 수정된 config 반환
  },
};

export default nextConfig;
