package netphone.com.core;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;


/** Driver. */
public class Driver {

  protected static Driver instance;
  protected AppiumDriver<?>  appiumDriver;
  private final DesiredCapabilities capabilities;
  private final Config config;

  /** Constructor. */
  public Driver() {
    this.config = Config.getInstance();
    this.capabilities = new DesiredCapabilities();
    // Device
    this.capabilities.setCapability("automationName", this.config.automationName);
    this.capabilities.setCapability("deviceName", this.config.deviceName);
    this.capabilities.setCapability("udid", this.config.udId);
    this.capabilities.setCapability("platformName", this.config.platformName);
    this.capabilities.setCapability("platformVersion", this.config.platformVersion);
    // Application
    this.capabilities.setCapability("appPackage", this.config.appPackage);
    this.capabilities.setCapability("appActivity", this.config.appActivity);
    this.capabilities.setCapability("noReset", this.config.noReset);
    // Hide keyboard
    this.capabilities.setCapability("unicodeKeyboard", this.config.unicodeKeyboard);
    this.capabilities.setCapability("resetKeyboard", this.config.resetKeyboard);
  }

  /** @return instance. */
  public static Driver getInstance() {
    if (instance == null) {
      instance = new Driver();
      instance.startSession();
    }
    return instance;
  }

  /** Start Session. */
  public void startSession() {
    try {
      URL url = new URL(config.appiumUrl);
      this.appiumDriver = new AndroidDriver<>(url, capabilities);
      this.appiumDriver.manage().timeouts().implicitlyWait(config.implicitlyWaitSeconds, TimeUnit.SECONDS);
    } catch (MalformedURLException exception) {
      System.out.println(exception.getMessage());
      exception.printStackTrace();
    }
  }

}
