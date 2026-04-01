import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { EmployersModule } from './modules/employers/employers.module';
import { CandidatesModule } from './modules/candidates/candidates.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { ApplicationsModule } from './modules/applications/applications.module';
import { InterviewesModule } from './modules/interviewes/interviewes.module';
import { ShortlistedsModule } from './modules/shortlisteds/shortlisteds.module';
import { SavedJobsModule } from './modules/saved-jobs/saved-jobs.module';

@Module({
  imports: [JobsModule, UsersModule, AuthModule, EmployersModule, CandidatesModule, CompaniesModule, ApplicationsModule, InterviewesModule, ShortlistedsModule, SavedJobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
