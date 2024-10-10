/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.pdf$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'static/pdf/', // Where the PDF will be saved in the build
                        publicPath: '/_next/static/pdf/', // How the PDF will be accessible
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
