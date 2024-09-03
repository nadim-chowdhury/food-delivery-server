// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
// import { OrderModule } from './order/order.module';
// import { RestaurantModule } from './restaurant/restaurant.module';

import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { ChatGateway } from './chat/chat.gateway';
import { GoogleMapsService } from './google-maps/google-maps.service';
import { Module } from '@nestjs/common';

// @Module({
//   imports: [UserModule, RestaurantModule, OrderModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from './user/user.module';

// @Module({
//   imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UserModule],
// })
// export class AppModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from './user/user.module';
// import { RestaurantModule } from './restaurant/restaurant.module';
// import { OrderModule } from './order/order.module';
// import { PaymentModule } from './payment/payment.module';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost/nest'),
//     UserModule,
//     RestaurantModule,
//     OrderModule,
//     PaymentModule,
//   ],
// })
// export class AppModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from './user/user.module';
// import { RestaurantModule } from './restaurant/restaurant.module';
// import { OrderModule } from './order/order.module';
// import { PaymentModule } from './payment/payment.module';
// import { NotificationModule } from './notification/notification.module';
// import { RatingModule } from './rating/rating.module';
// import { ChatModule } from './chat/chat.module';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost/nest'),
//     UserModule,
//     RestaurantModule,
//     OrderModule,
//     PaymentModule,
//     NotificationModule,
//     RatingModule,
//     ChatModule,
//   ],
// })
// export class AppModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { RestaurantModule } from './restaurant/restaurant.module';
// import { AuthModule } from './auth/auth.module';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost/nest'),
//     RestaurantModule,
//     AuthModule,
//   ],
// })
// export class AppModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { RestaurantModule } from './restaurant/restaurant.module';
// import { AuthModule } from './auth/auth.module';
// import { OrderModule } from './order/order.module';
// import { PromotionModule } from './promotion/promotion.module';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost/nest'),
//     RestaurantModule,
//     AuthModule,
//     OrderModule,
//     PromotionModule,
//   ],
// })
// export class AppModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { RestaurantModule } from './restaurant/restaurant.module';
// import { AuthModule } from './auth/auth.module';
// import { OrderModule } from './order/order.module';
// import { PromotionModule } from './promotion/promotion.module';
// import { RiderModule } from './rider/rider.module';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost/nest'),
//     RestaurantModule,
//     AuthModule,
//     OrderModule,
//     PromotionModule,
//     RiderModule,
//   ],
// })
// export class AppModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { RestaurantModule } from './restaurant/restaurant.module';
// import { AuthModule } from './auth/auth.module';
// import { OrderModule } from './order/order.module';
// import { PromotionModule } from './promotion/promotion.module';
// import { RiderModule } from './rider/rider.module';
// import { EarningModule } from './earning/earning.module';
// import { NotificationModule } from './notification/notification.module';
// import { ChatGateway } from './chat.gateway';
// import { GoogleMapsService } from './google-maps.service';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost/nest'),
//     RestaurantModule,
//     AuthModule,
//     OrderModule,
//     PromotionModule,
//     RiderModule,
//     EarningModule,
//     NotificationModule,
//   ],
//   providers: [ChatGateway, GoogleMapsService],
// })
// export class AppModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { RestaurantModule } from './restaurant/restaurant.module';
// import { AuthModule } from './auth/auth.module';
// import { OrderModule } from './order/order.module';
// import { PromotionModule } from './promotion/promotion.module';
// import { RiderModule } from './rider/rider.module';
// import { EarningModule } from './earning/earning.module';
// import { NotificationModule } from './notification/notification.module';
// import { DashboardModule } from './dashboard/dashboard.module';
// import { UserManagementModule } from './user-management/user-management.module';
// import { RestaurantManagementModule } from './restaurant-management/restaurant-management.module';
// import { RiderManagementModule } from './rider-management/rider-management.module';
// import { ChatGateway } from './chat.gateway';
// import { GoogleMapsService } from './google-maps.service';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost/nest'),
//     RestaurantModule,
//     AuthModule,
//     OrderModule,
//     PromotionModule,
//     RiderModule,
//     EarningModule,
//     NotificationModule,
//     DashboardModule,
//     UserManagementModule,
//     RestaurantManagementModule,
//     RiderManagementModule,
//   ],
//   providers: [ChatGateway, GoogleMapsService],
// })
// export class AppModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { OrderModule } from '../order/order.module';
// import { PaymentModule } from './payment/payment.module';
// import { PromotionModule } from './promotion/promotion.module';
// import { ComplaintModule } from './complaint/complaint.module';
// import { AuthModule } from './auth/auth.module';
// import { DashboardModule } from './dashboard/dashboard.module';
// import { UserManagementModule } from './user-management/user-management.module';
// import { RestaurantManagementModule } from './restaurant-management/restaurant-management.module';
// import { RiderManagementModule } from './rider-management/rider-management.module';
// import { ChatGateway } from './chat.gateway';
// import { GoogleMapsService } from './google-maps.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    OrderModule,
    // PaymentModule,
    // PromotionModule,
    // ComplaintModule,
    AuthModule,
    // DashboardModule,
    // UserManagementModule,
    // RestaurantManagementModule,
    // RiderManagementModule,
  ],
  providers: [ChatGateway, GoogleMapsService],
})
export class AppModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { GoogleMapsService } from './google-maps.service';
// import { PaymentGatewayService } from './payment-gateway.service';
// import { NotificationService } from './notification.service';
// import { ChatGateway } from './chat.gateway';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
//   controllers: [AppController],
//   providers: [
//     AppService,
//     GoogleMapsService,
//     PaymentGatewayService,
//     NotificationService,
//     ChatGateway,
//   ],
// })
// export class AppModule {}
