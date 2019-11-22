#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

#import <Filestack/Filestack.h>
#import <FSPicker/FSPicker.h>

@interface VideoUpload : CDVPlugin <FSPickerDelegate>

@property(nonatomic, copy) NSString* actionCallbackId;
@property(nonatomic, copy) NSString* keyCallbackId;
@property(nonatomic, copy) NSString* nameCallbackId;

- (void)setKey:(CDVInvokedUrlCommand*)command;

- (void)select:(CDVInvokedUrlCommand*)command;

- (void)startUpload:(CDVInvokedUrlCommand*)command;

@end