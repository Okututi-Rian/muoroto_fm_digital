import ImageKit from 'imagekit';

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

export default imagekit;

// Utility functions for ImageKit operations
export const uploadFile = async (file: File, folder: string = 'uploads') => {
  try {
    const buffer = await file.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    
    const response = await imagekit.upload({
      file: base64,
      fileName: file.name,
      folder: folder,
      tags: ['muoroto-fm'],
    });

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error('ImageKit upload error:', error);
    return {
      success: false,
      error: error,
    };
  }
};

export const deleteFile = async (fileId: string) => {
  try {
    await imagekit.deleteFile(fileId);
    return {
      success: true,
    };
  } catch (error) {
    console.error('ImageKit delete error:', error);
    return {
      success: false,
      error: error,
    };
  }
};

export const purgeCache = async (urls: string[]) => {
  try {
    const response = await imagekit.purgeCache(urls);
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error('ImageKit purge cache error:', error);
    return {
      success: false,
      error: error,
    };
  }
};

export const getFileDetails = async (fileId: string) => {
  try {
    const response = await imagekit.getFileDetails(fileId);
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error('ImageKit get file details error:', error);
    return {
      success: false,
      error: error,
    };
  }
};

export const listFiles = async (options: {
  skip?: number;
  limit?: number;
  searchQuery?: string;
  folder?: string;
}) => {
  try {
    const response = await imagekit.listFiles(options);
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error('ImageKit list files error:', error);
    return {
      success: false,
      error: error,
    };
  }
};