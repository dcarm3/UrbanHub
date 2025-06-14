import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../users/user.schema';

export type ReportDocument = Report & Document;

@Schema({ timestamps: true })
export class Report {
    @Prop({ required: true })
    titulo: string;

    @Prop()
    descricao: string;

    @Prop({ required: true })
    categoria: string;

    @Prop({ default: 'pendente' })
    status: string;

    @Prop({ type: Types.ObjectId, ref: 'User' })
    autor: Types.ObjectId;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
