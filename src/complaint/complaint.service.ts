import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Complaint, ComplaintDocument } from './complaint.schema';

@Injectable()
export class ComplaintService {
  constructor(@InjectModel(Complaint.name) private complaintModel: Model<ComplaintDocument>) {}

  async getAllComplaints(): Promise<Com

plaint[]> {
    return this.complaintModel.find().exec();
  }

  async createComplaint(complaint: Complaint): Promise<Complaint> {
    const newComplaint = new this.complaintModel(complaint);
    return newComplaint.save();
  }

  async deleteComplaint(complaintId: string): Promise<void> {
    const result = await this.complaintModel.deleteOne({ _id: complaintId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Complaint not found');
    }
  }
}
