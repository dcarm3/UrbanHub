import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report, ReportDocument } from './report.schema';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportsService {
    constructor(
        @InjectModel(Report.name) private reportModel: Model<ReportDocument>,
    ) { }

    async create(createReportDto: CreateReportDto): Promise<Report> {
        const newReport = new this.reportModel(createReportDto);
        return newReport.save();
    }

    async findAll(): Promise<Report[]> {
        return this.reportModel.find().exec();
    }

    async findOne(id: string): Promise<Report> {
        const report = await this.reportModel.findById(id).exec();
        if (!report) throw new NotFoundException('Ocorrência não encontrada');
        return report;
    }

    async update(id: string, updateReportDto: UpdateReportDto): Promise<Report> {
        const updated = await this.reportModel.findByIdAndUpdate(id, updateReportDto, { new: true });
        if (!updated) throw new NotFoundException('Ocorrência não encontrada');
        return updated;
    }

    async remove(id: string): Promise<Report> {
        const deleted = await this.reportModel.findByIdAndDelete(id);
        if (!deleted) throw new NotFoundException('Ocorrência não encontrada');
        return deleted;
    }
}
