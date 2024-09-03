import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Complaint } from './complaint.schema';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@Controller('admin/complaints')
@UseGuards(JwtAuthGuard)
// @UseGuards(RolesGuard)
// @Roles('admin')
export class ComplaintController {
  constructor(private readonly complaintService: ComplaintService) {}

  @Get()
  async getAllComplaints(): Promise<Complaint[]> {
    return this.complaintService.getAllComplaints();
  }

  @Post()
  async createComplaint(@Body() complaint: Complaint): Promise<Complaint> {
    return this.complaintService.createComplaint(complaint);
  }

  @Delete(':id')
  async deleteComplaint(@Param('id') complaintId: string): Promise<void> {
    return this.complaintService.deleteComplaint(complaintId);
  }
}
