//------------------------------------------------------------------------------
// <auto-generated />
//
// This file was automatically generated by SWIG (http://www.swig.org).
// Version 3.0.6
//
// Do not make changes to this file unless you know what you are doing--modify
// the SWIG interface file instead.
//------------------------------------------------------------------------------

namespace mscl {

public class InertialTypes : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal InertialTypes(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(InertialTypes obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~InertialTypes() {
    Dispose();
  }

  public virtual void Dispose() {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_InertialTypes(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
      global::System.GC.SuppressFinalize(this);
    }
  }

  public InertialTypes() : this(msclPINVOKE.new_InertialTypes(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public enum VehicleModeType {
    PORTABLE_VEHICLE = 0x01,
    AUTOMOTIVE_VEHICLE = 0x02,
    AIRBORNE_VEHICLE = 0x03,
    AIRBORNE_HIGH_G_VEHICLE = 0x4
  }

  public enum GNSS_Source {
    INTERNAL_GNSS = 0x01,
    EXTERNAL_GNSS = 0x02
  }

  public enum GnssFixType {
    FIXTYPE_3D = 0x00,
    FIXTYPE_2D = 0x01,
    FIXTYPE_TIMEONLY = 0x02,
    FIXTYPE_NONE = 0x03,
    FIXTYPE_INVALID = 0x04
  }

  public enum SensorState {
    SENSORSTATE_OFF = 0x00,
    SENSORSTATE_ON = 0x01,
    SENSORSTATE_UNKNOWN = 0x02
  }

  public enum AntennaState {
    ANTENNASTATE_INIT = 0x01,
    ANTENNASTATE_SHORT = 0x02,
    ANTENNASTATE_OPEN = 0x03,
    ANTENNASTATE_GOOD = 0x04,
    ANTENNASTATE_UNKNOWN = 0x05
  }

  public enum AntennaPower {
    ANTENNAPOWER_OFF = 0x00,
    ANTENNAPOWER_ON = 0x01,
    ANTENNAPOWER_UNKNOWN = 0x02
  }

  public enum FilterState {
    FILTERSTATE_STARTUP = 0x00,
    FILTERSTATE_INIT = 0x01,
    FILTERSTATE_RUNNING_SLN_VALID = 0x02,
    FILTERSTATE_RUNNING_SLN_ERROR = 0x03
  }

  public enum FilterStatus {
    FILTERSTATUS_IMU_UNAVAILABLE = 0x0001,
    FILTERSTATUS_GPS_UNAVAILABLE = 0x0002,
    FILTERSTATUS_MATRIX_SINGULARITY_IN_CALC = 0x0008,
    FILTERSTATUS_POS_COVARIANCE_HIGH_WARN = 0x0010,
    FILTERSTATUS_VEL_COVARIANCE_HIGH_WARN = 0x0020,
    FILTERSTATUS_ATT_COVARIANCE_HIGH_WARN = 0x0040,
    FILTERSTATUS_NAN_IN_SOLUTION = 0x0080,
    FILTERSTATUS_ATT_NOT_INIT = 0x1000,
    FILTERSTATUS_POS_VEL_NOT_INIT = 0x2000
  }

  public enum HeadingSource {
    HEADINGSOURCE_NONE = 0x0000,
    HEADINGSOURCE_INTERNAL_MAGNETOMETER = 0x0001,
    HEADINGSOURCE_INTERNAL_GPS_VELOCITY_VECTOR = 0x0002,
    HEADINGSOURCE_EXTERNAL_HEADING_UPDATE_CMD = 0x0004
  }

  public enum HeadingUpdateEnableOption {
    ENABLE_NONE = 0x00,
    ENABLE_INTERNAL_MAGNETOMETER = 0x01,
    ENABLE_INTERNAL_GNSS = 0x02,
    ENABLE_EXTERNAL_MESSAGES = 0x03,
    ENABLE_MAGNETOMETER_AND_GNSS = 0x04,
    ENABLE_GNSS_AND_EXTERNAL = 0x05,
    ENABLE_MAGNETOMETER_AND_EXTERNAL = 0x06,
    ENABLE_ALL = 0x07
  }

  public enum EstimationControlOption {
    ENABLE_GYRO_BIAS_ESTIMATION = 0x0001,
    ENABLE_ACCEL_BIAS_ESTIMATION = 0x0002,
    ENABLE_GYRO_SCALE_FACTOR_ESTIMATION = 0x0004,
    ENABLE_ACCEL_SCALE_FACTOR_ESTIMATION = 0X0008,
    ENABLE_GNSS_ANTENNA_OFFSET_ESTIMATION = 0X0010,
    ENABLE_HARD_IRON_AUTO_CALIBRATION = 0X0020,
    ENABLE_SOFT_IRON_AUTO_CALIBRATION = 0x0040
  }

  public enum GeographicSourceOption {
    NONE = 0x01,
    WORLD_MAGNETIC_MODEL = 0x02,
    MANUAL = 0x03
  }

  public enum AdaptiveMeasurementMode {
    ADAPTIVE_MEASUREMENT_DISABLE = 0x00,
    ADAPTIVE_MEASUREMENT_ENABLE_FIXED = 0x01,
    ADAPTIVE_MEASUREMENT_ENABLE_AUTO = 0x02
  }

  public enum ConstellationId {
    GPS = 0x00,
    SBAS = 0x01,
    GALILEO = 0x02,
    BEIDOU = 0x03,
    QZSS = 0x05,
    GLONASS = 0x06
  }

}

}