import bucketModel from "../Models/bucket.Model";

export class bucketServices {
  async createBucket(userId: String, bucketName: String) {
    try {
        // if (!bucketName) {
        //     throw new Error('Bucket name is required');
        // }
      const newBucket = new bucketModel({
        userId: userId,
        bucketName: bucketName,
      });

      const savedBucket = await newBucket.save();
      return savedBucket;
    } catch (error) {
      console.error("Error creating bucket:", error);
      throw error;
    }
  }
  async listBucket() {
    try {
      const allObjects = await bucketModel.find({});
      return allObjects;
    } catch (error: any) {
      console.error("Error listing buckets:", error.message);
      throw error;
    }
  }
}
