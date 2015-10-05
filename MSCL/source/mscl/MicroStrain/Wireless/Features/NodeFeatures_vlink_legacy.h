/*******************************************************************************
Copyright(c) 2015 LORD Corporation. All rights reserved.

MIT Licensed. See the included LICENSE.txt for a copy of the full MIT License.
*******************************************************************************/
#pragma once

#include "NodeFeatures.h"

namespace mscl
{
	//Class: NodeFeatures_vlink_legacy
	//	Contains information on features for the V-Link (legacy) node. Inherits from <NodeFeatures>.
	class NodeFeatures_vlink_legacy : public NodeFeatures
	{
	private:
		NodeFeatures_vlink_legacy();	//disabled default constructor

	public:
		virtual ~NodeFeatures_vlink_legacy(){};

		//Constructor: NodeFeatures_vlink_legacy
		//	Creates a NodeFeatures_vlink_legacy object.
		NodeFeatures_vlink_legacy(const NodeInfo& info);

	public:
		//Function: sampleRates
		//	Gets a list of the <WirelessTypes::WirelessSampleRate>s that are supported by this Node for the given sampling mode.
		virtual const WirelessTypes::WirelessSampleRates sampleRates(WirelessTypes::SamplingMode samplingMode) const override;

		virtual bool supportsAutoBalance(uint8 channelNumber) const final;
	};
}